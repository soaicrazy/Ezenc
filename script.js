var body = document.querySelectorAll('.index');
window.addEventListener('scroll', (event) => {
    let scroll = this.scrollY;
});

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

//mousemove 
$('.section-bg').mousemove(function(e) {

    var xPos = e.pageX;
    var yPos = e.pageY;

    $('.parallax').css({
            marginLeft: -xPos / 20,
            marginRight: xPos / 20,
            marginTop: -yPos / 20,
            marginBottom: yPos / 20
        }

    );

});


//carousel

$('.carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
});

//counter
function chay() {

    const counter1 = document.getElementById('counter1');
    const counter2 = document.getElementById('counter2');
    const counter3 = document.getElementById('counter3');
    const counter4 = document.getElementById('counter4');

    let startNumber = 0;
    let endNumber1 = 21;
    let endNumber2 = 60;
    let endNumber3 = 124;
    let endNumber4 = 30;

    function CountUp1(count) {
        counter1.innerHTML = count;
        if (count < endNumber1) {
            setTimeout(() => CountUp1(count + 1), 1)
        }
    }
    CountUp1(startNumber);

    function CountUp2(count) {
        counter2.innerHTML = count;
        if (count < endNumber2) {
            setTimeout(() => CountUp2(count + 1), 1)
        }
    }
    CountUp2(startNumber);

    function CountUp3(count) {
        counter3.innerHTML = count;
        if (count < endNumber3) {
            setTimeout(() => CountUp3(count + 1), 1)
        }
    }
    CountUp3(startNumber);

    function CountUp4(count) {
        counter4.innerHTML = count;
        if (count < endNumber4) {
            setTimeout(() => CountUp4(count + 1), 10)
        }
    }
    CountUp4(startNumber);
}

document.addEventListener("DOMContentLoaded", function() {
        window.addEventListener("scroll", function() {
            var x = pageYOffset;
            console.log(x)
            if (x > 10900 && x < 11000) {
                chay();
            } else if (x > 5600 && x < 5700) {
                chay();
            }
        })
    })
    //slide-card
$('.slider-card').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true
});

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

// mobi
$(function() {
    var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        // Variables privadas
        var links = this.el.find('.drop-mobi-menu');
        // Evento
        links.on('click', { el: this.el, multiple: this.multiple }, this.dropdown)
    }

    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el;
        $this = $(this),
            $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');

        if (!e.data.multiple) {
            $el.find('.nut_dropdown').not($next).slideUp().parent().removeClass('open');
        };
    }

    var accordion = new Accordion($('.nut_dropdown'), false);
});