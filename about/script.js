//navbar 
document.addEventListener("DOMContentLoaded", function() {
    var menu = document.querySelectorAll('.section-header');
    var menu = menu[0];

    var trangthai = "duoi250";
    window.addEventListener("scroll", function() {
        var x = pageYOffset;
        if (x > 250) {
            if (trangthai == "duoi250") {
                trangthai = "tren250";
                menu.classList.add('fix-header');
            }
        } else {
            if (trangthai == "tren250") {
                menu.classList.remove('fix-header');
                trangthai = "duoi250";
            }
        }

    })
})

//fadeIn
const divs = document.querySelectorAll('.wow')
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const { target } = entry;
        target.classList.toggle('active-fadeIn', entry.isIntersecting)
    })
}, {})
divs.forEach(div => {
    observer.observe(div)
})

//carousel
$('.carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
});

//scroll-top
$(document).ready(function() {
    $('.scroll-top').on('click', function() {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    });

    $(window).bind('scroll', function() {
        var pos = window.scrollY;
        if (pos > 0) {
            $('.scroll-top').show();
        } else {
            $('.scroll-top').hide();
        }
    });
});