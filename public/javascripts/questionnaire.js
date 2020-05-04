/* -------------------------------------------------------------------------- */
/*                   Questionnaire: make next btn appear                      */
/*                   after selecting a questionnaire option                   */
/* -------------------------------------------------------------------------- */
let savedAnswers = [];
let sav_ans_addendum = ["", " days a week", " sets per workout"];
const questions = [
    "What is your fitness goal?",
    "How many days a week will you train?",
    "How many sets per workout?",
    "The End"
];
const options = [
    ["Gain Muscle", "Maintain Weight", "Burn Fat"],
    ["3", "4", "5", "6"],
    ["9", "15", "21"],
    ["Save answers"]
];

let i = 0;

let func = function() {
    let htmlString="";
    let j = 0;
    /* ------------------------ display question ------------------------ */
    $("#questions-row").html("<h4 class='col-12 text-center' style='font-size:50px'>" + questions[i] + "</h4>");

    /* --------------------- display saved answers ---------------------- */
    htmlString="";
    for (j = 0; j < i; j++) {
        htmlString += "<div class='col-12'><h3 class='text-center'><span class='badge badge-pill'>";
        htmlString += savedAnswers[j] + sav_ans_addendum[j];
        htmlString += "</span></h3></div>";
    }
    // console.log("htmlString =", htmlString);
    $("#saved-options-row").html(htmlString);

    /* ------------------------ display options ------------------------- */
    htmlString="";
    for (j = 0; j < options[i].length; j++) {
        htmlString += "<button class='option btn btn-lg qnr-btn mx-5'>";
        htmlString += options[i][j];
        htmlString += "</button>";
    }
    $("#options-row").html(htmlString);

    /* ------------------------ display options ------------------------- */
    $nav_btn_right = $("#nav-btn-right");
    $("#nav-btn-right").hide();

    if (i != 3) {
        let $qnrOptions = $(".option");
        $qnrOptions.on("click", function() {
            $qnrOptions.removeClass("option-selected");
            $(this).addClass("option-selected");
            $nav_btn_right.show();
            savedAnswers[i] = $(this).text();
            console.log("savedAnswers =", savedAnswers);
        });
    }
};

$(document).ready(() => {
    func();
    $nav_btn_right = $("#nav-btn-right");
    $nav_btn_right.on("click", function() {
        if (i != 4) {
            i++;
            func();
        }
        if (i == 3) {
            $nav_btn_right.hide();
            let goal = savedAnswers[0].replace(' ', '-');
            let freq = savedAnswers[1];
            let vol = savedAnswers[2];
            console.log("goal: ", goal);
            console.log("freq: ", freq);
            console.log("vol: ", vol);
            $("#options-row button:nth-child(1)").on("click", () => {
                window.location.replace(`/saveQnrAnswersToUser?goal=${goal}&freq=${freq}&vol=${vol}`);
            });
        }
    });

    $("#nav-btn-left").on("click", function() {
        if (i != 0) {
            i--;
            func();
        } else {
            window.location.replace("/");
        }
    });

});
