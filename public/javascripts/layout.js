const clearToken = require('../../globals').clearInMemToken;

jQuery(document).ready(() => {
    $('.alert')
        .hide()
        .slideDown(1000)
        .delay(3000)
        .slideUp(2000);

    $('#logout-btn').on('click', (e) => {
        clearToken();
    })
});