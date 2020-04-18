/**
 * Global calendar var
 */
var cal;
var selectedDay;
// Modals
var addExerciseModal;
var viewExerciseModal;
// Tables
var tableExercises;
// Input
var inputReps;
var inputWeight;
var btnAddExercise;

// Number of days visible in week and month view
const NUM_DAYS = {
    "week": 7,
    "month": 42
};

function init() {
    initModals();
    initCalendar();
    setRenderRangeText();
    setEventListener();

    computeSchedules(NUM_DAYS['week']);
}

/**
 * Re-computes schedules for visible date range
 * @param {*} numDays 
 */
function computeSchedules(numDays) {
    var scheduleList = [];
    var date = cal.getDateRangeStart().toDate();

    for (i = 0; i < numDays; ++i) {
        // Program var is passed from PUG
        program.exercises.forEach(exerciseEntry => {
            // Inefficient af, optimize later
            if (exerciseEntry.dayOfWeek == date.getDay()) {
                scheduleList.push({
                    start: date,
                    title: exerciseEntry.exercise.name,
                    category: 'task',
                    raw: exerciseEntry
                });
            }
        });
        // Move to next day
        date = new Date(date.getTime() + 864e5);
    }
    cal.clear(true);
    cal.createSchedules(scheduleList);
}

/**
 * Initialized DataTables and modals
 */
function initModals() {
    inputReps = $('#inputReps');
    inputWeight = $('#inputWeight');
    btnAddExercise = $('#btnAddExercise');
    addExerciseModal = $('#modalAddExercise');
    viewExerciseModal = $('#modalViewExercise');

    tableExercises = $('#tableExercises').DataTable({
        "columnDefs": [
            // Hide ID column
            { className: "d-none", "targets": [3] }
        ]
    });

    // Attach event listeners for when modal is closed
    addExerciseModal.on('hidden.bs.modal', function () {
        // Unselect exercise
        tableExercises.$('tr.selected').removeClass('selected');
        // Clear search
        tableExercises.search("");
        tableExercises.draw();
        // Clear input
        inputReps.val('');
        inputWeight.val('');
        // Hide error
        $('.invalid-feedback').removeClass('d-block');
    });

    // Allow user to "select" and "unselect" exercises from the table
    $('#tableExercises tbody').on('click', 'tr', function () {
        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
        }
        else {
            tableExercises.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
    });

    btnAddExercise.on('click', onAddExercise);
}

/**
 * Initializes calendar object
 */
function initCalendar() {
    // Initialize the calendar
    cal = new tui.Calendar('#calendar', {
        // Disable analytics
        usageStatistics: false,
        defaultView: 'week',
        taskView: ['task'],
        // Don't show hours
        scheduleView: false,
        // Prevent the user from selecting days in monthly view
        isReadOnly: true,
        month: {
            scheduleFilter(schedule) {
                // Show everything in monthly view
                return true;
            }
        },
        template: {
            taskTitle: function () {
                // Replace the 'Task' text with Exercises
                return '<span class="tui-full-calendar-left-content">Exercises</span>';
            },
            weekDayname: function (model) {
                // Add + button to day name in weekly view
                return '<span class="tui-full-calendar-dayname-date">' + model.date + '</span>&nbsp;&nbsp;<span class="tui-full-calendar-dayname-name">' + model.dayName + '</span>' + '<span><button class="btn btn-default btn-xs float-right mt-2 mr-2 btn-add-exercise" type="button" data-day="' + model.day + '"><i class="calendar-icon ic-plus"></i></button></span>';
            },
            monthDayname: function (model) {
                return (model.label).toString() + '<span><button class="btn btn-default btn-xs float-right btn-add-exercise" type="button" data-day="' + model.day + '"><i class="calendar-icon ic-plus"></i></button></span>';
            },
            task: function (schedule) {
                return '<div class=\"bg-' + schedule.raw.exercise.group.toLowerCase() + '\">' + schedule.raw.exercise.name + ' x ' + schedule.raw.reps + "</div>";
            },
        }
    });

    // Calendar event handlers
    cal.on('clickSchedule', onClickExercise);
}

/**
 * Called whenever an exercise is clicked
 * @param {*} schedule 
 */
function onClickExercise(schedule) {
    console.log(JSON.stringify(schedule));

    // Set modal data
    viewExerciseModal.modal('show');
}

/**
 * Called whenever + button is clicked
 */
function onClickAddExercise(e) {
    selectedDay = parseInt($(this).data('day'));
    addExerciseModal.modal('show');
}

function onAddExercise() {
    var numReps = parseInt(inputReps.val());
    var weight = parseInt(inputWeight.val());
    // [0] is name, [1] is equipment, [2] is group, [3] is db-id
    var selectedExercise = tableExercises.row('.selected').data();
    var error = false;

    $('.invalid-feedback').removeClass('d-block');
    // Validate reps
    if (isNaN(numReps) || numReps < 1) {
        // Show error
        $('#errorReps').addClass('d-block');
        error = true;
    }

    // Validate weight
    if (isNaN(weight) || weight < 1) {
        // Show error
        $('#errorWeight').addClass('d-block');
        error = true;
    }

    // Ensure exercise is selected
    if (selectedExercise === undefined) {
        $('#errorTable').addClass('d-block');
        error = true;
    }

    if (error) {
        return false;
    }

    apiAddExercise(selectedExercise[3], selectedDay, numReps, weight, (data) => {
        program.exercises.push(data);
        computeSchedules(NUM_DAYS[cal.getViewName()]);
    }, (error) => {
        // TODO: Display error in UI
        console.log(JSON.stringify(error));
    });
}

/**
 * Updates the dropdown (weekly/month view)
 */
function setDropdownCalendarType() {
    var calendarTypeName = document.getElementById('calendarTypeName');
    var calendarTypeIcon = document.getElementById('calendarTypeIcon');
    var type = cal.getViewName();
    var iconClassName;

    if (type === 'week') {
        type = 'Weekly';
        iconClassName = 'calendar-icon ic_view_week';
    } else {
        type = 'Monthly';
        iconClassName = 'calendar-icon ic_view_month';
    }

    calendarTypeName.innerHTML = type;
    calendarTypeIcon.className = iconClassName;
}

/**
 * Helper function for grabbing the data-action attribute of a DOM element.
 * @param {*} target 
 */
function getDataAction(target) {
    return target.dataset ? target.dataset.action : target.getAttribute('data-action');
}

/**
 * Callback for dropdown menu item click
 * @param {*} e 
 */
function onClickMenu(e) {
    var target = $(e.target).closest('a[role="menuitem"]')[0];
    var action = getDataAction(target);
    var viewName = '';

    switch (action) {
        case 'toggle-monthly':
            viewName = 'month';
            break;
        case 'toggle-weekly':
        default:
            viewName = 'week';
            break;
    }
    cal.changeView(viewName, true);
    computeSchedules(NUM_DAYS[viewName]);
    // Update dropdown text
    setDropdownCalendarType();
    // Update range text
    setRenderRangeText();
}

/**
 * Callback for calendar navigation button click
 * @param {*} e 
 */
function onClickNavi(e) {
    var action = getDataAction(e.target);

    switch (action) {
        case 'move-prev':
            cal.prev();
            break;
        case 'move-next':
            cal.next();
            break;
        case 'move-today':
            cal.today();
            break;
        default:
            return;
    }

    computeSchedules(NUM_DAYS[cal.getViewName()]);
    setRenderRangeText();
}

/**
 * Updates the date range text to match the current view of the calendar
 */
function setRenderRangeText() {
    var renderRange = document.getElementById('renderRange');
    var options = cal.getOptions();
    var viewName = cal.getViewName();
    var html = [];
    if (viewName === 'month' &&
        (!options.month.visibleWeeksCount || options.month.visibleWeeksCount > 4)) {
        html.push(moment(cal.getDate().getTime()).format('YYYY.MM'));
    } else {
        html.push(moment(cal.getDateRangeStart().getTime()).format('YYYY.MM.DD'));
        html.push(' ~ ');
        html.push(moment(cal.getDateRangeEnd().getTime()).format(' MM.DD'));
    }
    renderRange.innerHTML = html.join('');
}

function setEventListener() {
    $('.dropdown-menu a[role="menuitem"]').on('click', onClickMenu);
    $('#menu-navi').on('click', onClickNavi);
    window.addEventListener('resize', tui.util.throttle(function () {
        // Re-render the calendar when window is resized
        cal.render();
    }, 50));

    /**
     * Listener is attached in a strange way since the buttons are created
     * dynamically
     */
    $(document).on('click', '.btn-add-exercise', onClickAddExercise)
}

function apiAddExercise(exerciseId, dayOfWeek, reps, weight, success, error) {
    requestBody = {};
    requestBody["programId"] = program._id;
    requestBody["exerciseId"] = exerciseId;
    requestBody["dayOfWeek"] = dayOfWeek;
    requestBody["reps"] = reps;
    requestBody["weight"] = weight;

    $.ajax({
        url: window.location.origin + '/api/programs',
        type: 'POST',
        data: requestBody,
        success: success,
        error: error
    });
}

jQuery(document).ready(() => {
    init();
});