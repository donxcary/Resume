$(function() {
    var body = document.querySelector('body');
    var $cursor = $('.cursor');

    function cursormover(e) {
        gsap.to($cursor, {
            x: e.clientX,
            y: e.clientY,
            stagger: .002
        });
    }

    function cursorhover(e) {
        gsap.to($cursor, {
            scale: 1.4,
            opacity: 1
        });
    }

    function cursor(e) {
        gsap.to($cursor, {
            scale: 1,
            opacity: .6
        });
    }

    $(window).on('mousemove', cursormover);
    $('.menubar').hover(cursorhover, cursor);
    $('a').hover(cursorhover, cursor);
    $('.navigation-close').hover(cursorhover, cursor);
});
