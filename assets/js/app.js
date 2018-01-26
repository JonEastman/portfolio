require('../css/app.scss');

var $ = require('jquery');

$(document).ready(function() {

    // $(window).scroll(function() {
    //     var scroll = $(window).scrollTop();
    //
    //     if (scroll >= 500) {
    //         $('#js-nav-background').addClass('');
    //     } else {
    //
    //     }
    // });

    $(function () {
        $(document).scroll(function () {
            var $nav = $(".navbar-fixed-top");
            $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        });
    });
});