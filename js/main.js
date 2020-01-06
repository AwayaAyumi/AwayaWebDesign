
//pace.js
$(function () {
    Pace.on('done', function(){
        $('.pace-done').fadeIn();
    });
});

//wow
window.addEventListener('scroll', function (e) {
    if ($(window).scrollTop() <= 5) {
        $('.wow').removeClass('animated');
        $('.wow').removeAttr('style');
        new WOW().init();
    }
});



//slick slider
$(function () {

    $('.slider').slick({
        prevArrow: '<img src="../image/arrow-white.svg" class="slide-arrow prev-arrow">',
        nextArrow: '<img src="../image/arrow-white.svg" class="slide-arrow next-arrow">',
        centerMode: true,
        dots: true,
        variableWidth: true,
        accessibility: true,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1088,
                settings: {
                    slidesToShow: 2,
                    infinite: true,
                    dots: true,
                    autoplay: false,
                    centerMode: true,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    autoplay: false,
                }
            }
        ]
    });
   
});


//scroll top
$(function () {
    $('.to-top').each(function () {
        var el = scrollableElement('html', 'body');
        $(this).on('click', function (event) {
            event.preventDefault();
            $(el).animate({ scrollTop: 0 }, 900);
        });
    });
    function scrollableElement() {
        var i, len, el, $el, scrollable;
        for (i = 0, len = arguments.length; i < len; i++) {
            el = arguments[i],
                $el = $(el);
            if ($el.scrollTop() > 0) {
                return el;
            } else {
                $el.scrollTop(1);
                scrollable = $el.scrollTop() > 0;
                $el.scrollTop(0);
                if (scrollable) {
                    return el;
                }
            }
        }
        return [];
    }
});


//to-top showing
jQuery(window).on("scroll", function ($) {
    if (jQuery(this).scrollTop() > 100) {
        jQuery('.to-top').addClass('effect-scroll');
    } else {
        jQuery('.to-top').removeClass('effect-scroll');
    }
});
jQuery('.to-top').click(function () {
    jQuery('body,html').animate({
        scrollTop: 0
    }, 500);
    return false;
});


//toggle nav
$(function () {
    var $navMenu = $('.toggle-nav');
    var $toggleButton = $('.navbar-toggle');
    var $navLink = $navMenu.find('a');
    var menuToggle = 
            function(){
                if ($toggleButton.hasClass('close-button')) {
                    $navMenu.stop(true).animate({
                        top: 0
                    }, 300, 'easeInCubic');
                } else {
                    $navMenu.stop(true).animate({
                        top: '-2000px'
                    }, 900, 'easeOutExpo');
                };
            };

    $toggleButton.on('click', function () {
        $toggleButton.toggleClass('close-button');
        menuToggle();
    });
    $navLink.on('click', function () {
        $toggleButton.removeClass('close-button');
        menuToggle();
    });



});

//smooth scroll
jQuery(function ($) {
    $('a[href^="#"]').click(function (event) {
        var anchor = $(this).attr("href");
        var position = $(anchor).offset().top - 60;
        $('body,html').animate({ scrollTop: position }, 600, 'easeOutBack');
    });
});



