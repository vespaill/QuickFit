jQuery(document).ready(() => {


    let $qnrNextBtn = jQuery('#nav-btn-right');
    $qnrNextBtn.hide();

    let $qnrOptions = jQuery('.option');

    $qnrOptions
    .on('focus', () => {
        $qnrNextBtn.show();
    })
    // .on('blur', () => {
    //     setTimeout( ()=> $qnrNextBtn.hide(), 1000 );
    // });

});