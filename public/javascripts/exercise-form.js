$(document).ready(function () {

    /* Enable bootstrap tooltips. */
    $('[data-toggle="tooltip"]').tooltip();

    /* Colorcode the option, according to selected exercise category. */
    let $select = $('select');
    $select.change(function(e) {
        $select
            .removeClass('bg-chest bg-triceps bg-upper-back bg-biceps bg-shoulders bg-core bg-lower-body')
            .addClass( $('select option:selected').attr('class') );
    });
})
