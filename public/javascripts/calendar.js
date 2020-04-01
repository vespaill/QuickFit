/**
 * Global calendar var
 */
var cal;

function init() {
    initCalendar();
    setRenderRangeText();
    setEventListener();
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
        // calendarList: [...] -> coming soon...
        template: {
            taskTitle: function () {
                // Replace the 'Task' text with Exercises
                return '<span class="tui-full-calendar-left-content">Exercises</span>';
            },
            weekDayname: function (model) {
                // Add + button to day name in weekly view
                return '<span class="tui-full-calendar-dayname-date">' + model.date + '</span>&nbsp;&nbsp;<span class="tui-full-calendar-dayname-name">' + model.dayName + '</span>' + '<span><button class="btn btn-default btn-xs float-right mt-2 mr-2 btn-add-exercise" type="button"><i class="calendar-icon ic-plus"></i></button></span>';
            },
            monthGridHeader: function (dayModel) {
                var date = parseInt(dayModel.date.split('-')[2], 10);
                var classNames = ['tui-full-calendar-weekday-grid-date '];

                if (dayModel.isToday) {
                    classNames.push('tui-full-calendar-weekday-grid-date-decorator');
                }

                // Add + button to day name in monthly view
                return '<span class="' + classNames.join(' ') + '">' + date + '</span>' + '<span><button class="btn btn-default btn-xs float-right btn-add-exercise" type="button"><i class="calendar-icon ic-plus"></i></button></span>';
            }
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
    // TODO: Popup the exercise modal here
    alert("🔨🔨 Work In Progress 🔨🔨");
}

/**
 * Called whenever + button is clicked
 */
function onClickAddExercise() {
    // TODO: Popup the add exercise modal here
    alert("🔨🔨 Work In Progress 🔨🔨");
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
    var options = cal.getOptions();
    var viewName = '';

    switch (action) {
        case 'toggle-weekly':
            viewName = 'week';
            break;
        case 'toggle-monthly':
            options.month.visibleWeeksCount = 0;
            viewName = 'month';
            break;
        default:
            break;
    }

    cal.setOptions(options, true);
    cal.changeView(viewName, true);

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

jQuery(document).ready(() => {
    init();
});