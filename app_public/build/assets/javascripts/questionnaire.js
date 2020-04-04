/* -------------------------------------------------------------------------- */
/*                   Questionnaire: make next btn appear                      */
/*                   after selecting a questionnaire option                   */
/* -------------------------------------------------------------------------- */
jQuery(document).ready(() => {

    let $qnrNextBtn = jQuery('#nav-btn-right');
    $qnrNextBtn.hide();

    let $qnrOptions = jQuery('.option');
    $qnrOptions
        .on('focus', () => {
            $qnrNextBtn.show();
        })

});