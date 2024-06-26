$(document).ready(function () {

    /* template navigation
    -----------------------------------------------*/
    $('.main-navigation').onePageNav({
        scrollThreshold: 0.2, // Adjust if Navigation highlights too early or too late
        scrollOffset: 75, // Height of Navigation Bar
        filter: ':not(.external)',
        changeHash: true
    });

    /* Navigation visible on Scroll */
    mainNav(); // Initial call to set navigation state
    $(window).scroll(function () {
        mainNav(); // Call mainNav() on scroll
    });

    function mainNav() {
        var top = $(window).scrollTop(); // Use jQuery to get scroll position
        if (top > 40) {
            $('.sticky-navigation').stop().animate({
                "opacity": '1',
                "top": '0'
            });
        } else {
            $('.sticky-navigation').stop().animate({
                "opacity": '0',
                "top": '-75px' // Corrected top value with 'px' suffix
            });
        }
    }

    /* Hide mobile menu after clicking on a link
    -----------------------------------------------*/
    $('.navbar-collapse a').click(function () {
        $(".navbar-collapse").collapse('hide');
    });

    /* smoothscroll
    -----------------------------------------------*/
    $('.navbar-default a').click(function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
    });

    /* blog masonry
    -----------------------------------------------*/
    $(window).on('load', function () {
        function blogisotope() {
            var t = $(".blog-masonry").width(),
                n = Math.floor(t),
                e = 0;
            if ($(".blog-masonry").hasClass("masonry-true")) {
                n = Math.floor(t * .3033);
                e = Math.floor(t * .04);
                if ($(window).width() < 1023) {
                    if ($(window).width() < 768) {
                        n = Math.floor(t * 1);
                    } else {
                        n = Math.floor(t * .48);
                    }
                } else {
                    n = Math.floor(t * .3033);
                }
            }
            return e;
        }

        var r = $(".blog-masonry");
        function bloggingisotope() {
            r.isotope({
                itemSelector: ".post-masonry",
                animationEngine: "jquery",
                masonry: {
                    gutterWidth: blogisotope()
                }
            });
        }

        bloggingisotope();
        $(window).smartresize(bloggingisotope);
    });

    /* Owl Carousel
    -----------------------------------------------*/
    $("#owl-testimonial").owlCarousel({
        autoplay: true, // Enable autoplay
        autoplayTimeout: 8000, // Autoplay interval in milliseconds
        items: 1, // Display only one item at a time
        loop: true // Enable loop
    });

    /* Parallax section
    -----------------------------------------------*/
    function initParallax() {
        $('#home').parallax("100%", 0.1);
        $('#testimonial').parallax("100%", 0.3);
        $('#about').parallax("100%", 0.1);
        $('#counter').parallax("100%", 0.2);
        $('#blog').parallax("100%", 0.1);
        $('#contact').parallax("100%", 0.3);
    }
    initParallax();

    /* wow
    -------------------------------*/
    new WOW({ mobile: false }).init();


});
