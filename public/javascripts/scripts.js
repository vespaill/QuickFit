jQuery(document).ready(() => {

    let $rNavBtn = jQuery('#nav-btn-right');
    $rNavBtn.hide();

    let $options = jQuery('.option');

    $options
    .on('focus', () => {
            $rNavBtn.show();
    })
    // .on('blur', () => {
    //         $rNavBtn.hide();
    // });

});