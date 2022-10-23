$(document).ready(function() {
    var stickyNavTop = $('.main-header').offset().top;

    var stickyNav = function(){
        var scrollTop = $(window).scrollTop();

        if (scrollTop > stickyNavTop) {
            $('.main-header').addClass('sticky');
        } else {
            $('.main-header').removeClass('sticky');
        }
    };

    stickyNav();

    $(window).scroll(function() {
        stickyNav();
    });

    $('#search-button').click(function() {
        $( '.search-container' ).toggleClass( "open" );
    });
});