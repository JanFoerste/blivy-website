/**
 * @author Jan Foerste <me@janfoerste.de>.
 */

$('.read-more').click(function () {
    scroll($('#scroll-hook-info'));
});

$('.download-link').click(function () {
    scroll($('#scroll-hook-download'));
});

function scroll(to) {
    var h = to.offset().top;

    $('html,body').animate({
        scrollTop: h
    }, 900);
}