$(document).ready(function () {

    /* =========================================================
        Meanmenu js / Mobile Menu Js
    =========================================================*/
    $('nav.mainmenu').meanmenu({
        meanMenuClose: 'X',
        meanMenuCloseSize: '18px',
        meanScreenWidth: '991',
        meanExpandableChildren: true,
        meanMenuContainer: '.mobile-menu',
        onePage: true
    });



    /* =========================================================
        Search Box PoP-UP
    =========================================================*/
    $('.open_search').on('click', function (event) {
        event.stopPropagation();

        $('.search_block').toggleClass('visible');
        $('.search_block .search_input').focus();
    });

    $('body').on('click', function () {
        $('.search_block').removeClass('visible');
    });

    $('.search_box').on('click', function (event) {
        event.stopPropagation();
    });

    $('.search_input').on('keyup', function (event) {
        if ($(this).val() !== '') {
            $(this).addClass('typing');
        } else {
            $(this).removeClass('typing');
        }
    });



    /* =========================================================
        Scroll To Top Start
    =========================================================*/
    var scrollToTopBtn = $('.scrollToTop');
    function handleScroll() {
        if ($(window).scrollTop() > 400) {
            scrollToTopBtn.show();
        } else {
            scrollToTopBtn.hide();
        }
    }
    handleScroll();
    $(window).scroll(function () {
        handleScroll();
    });
    scrollToTopBtn.on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    });



    /* =========================================================
        Sort Drop-down Button
    =========================================================*/
    $('.dropdown-menu .dropdown-item').on('click', function () {
        var getValue = $(this).text();
        $('.dropdown-select').html(getValue + ' <i class="flaticon-down-arrow"></i>');
    });



    /* =========================================================
        Comment Edit Option
    =========================================================*/
    $(".th-edit-comment .flaticon-dots").on("click", function () {
        $(this).next(".th-edit-comment .drop-box").toggle();
    });
    $(document).on("click", function (event) {
        if (!$(event.target).closest(".th-edit-comment").length) {
            $(".th-edit-comment .drop-box").hide();
        }
    });



    /* =========================================================
        Filter Show Hide
    =========================================================*/
    $("#ad-filter-button").on("click", function () {
        $("#effect").toggle();
    });



    /* =========================================================
        Sticky Header
    =========================================================*/
    $(window).scroll(function () {
        var scrollTop = $(this).scrollTop();
        if (scrollTop > 50) {
            $('.header').addClass('sticky');
            $('.resp-none').addClass('scroll-none');
        } else {
            $('.header').removeClass('sticky');
            $('.resp-none').removeClass('scroll-none');
        }
    });
});




/* =========================================================
        Slick Slider JS
=========================================================*/
$(document).ready(function () {
    $('.editors-choice-slider').slick({
        dots: true,
        speed: 1500,
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: false,
        prevArrow: $('.editors-choice-nav .slick-prev'),
        nextArrow: $('.editors-choice-nav .slick-next'),
        arrows: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 380,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 1500,
                    arrows: false
                }
            }
        ]
    });
});



/* =========================================================
    AOS
=========================================================*/
$(document).ready(function () {
    AOS.init({
        duration: 1000,
    });
});



/* =========================================================
    Image Gallary Lightboxify
=========================================================*/
$(document).ready(function () {
    $('.lightbox').lightboxify();
});



/* =========================================================
    Set the countdown date
=========================================================*/
document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM fully loaded and parsed");

    var daysElement = document.getElementById("days");
    var hoursElement = document.getElementById("hours");
    var minutesElement = document.getElementById("minutes");
    var secondsElement = document.getElementById("seconds");

    console.log(daysElement, hoursElement, minutesElement, secondsElement);

    // Check if all elements are found
    if (!daysElement || !hoursElement || !minutesElement || !secondsElement) {
        console.error("One or more countdown elements not found");
        return;
    }

    // Set the countdown date
    var countDownDate = new Date("oct 1, 2024 00:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get the current time
        var now = new Date().getTime();

        // Find the distance between current time and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the corresponding elements
        daysElement.innerHTML = days < 10 ? '0' + days : days;
        hoursElement.innerHTML = hours < 10 ? '0' + hours : hours;
        minutesElement.innerHTML = minutes < 10 ? '0' + minutes : minutes;
        secondsElement.innerHTML = seconds < 10 ? '0' + seconds : seconds;

        // If the count down is finished display text
        if (distance < 0) {
            clearInterval(x);
            daysElement.innerHTML = "00";
            hoursElement.innerHTML = "00";
            minutesElement.innerHTML = "00";
            secondsElement.innerHTML = "00";
        }
    }, 1000);
});



