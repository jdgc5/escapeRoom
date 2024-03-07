$(document).ready(function () {
    // Almacenamos la identida de la página
    let page = document.head.querySelector('meta[name="page-identity"]')['content'];
    let pause = false;
    
    $(window).scroll(function() {
        if ($(this).scrollTop() != 0) {
            $('.nav-item a').addClass('colorBlack');
        } else {
            $('.nav-item a').removeClass('colorBlack');
        }
    });
    
    $('.menu-toggle input').on('click', function() {
        $('.list-nav').toggleClass('show');
    
        if ($('.list-nav').hasClass('show')) {
            $('.nav-item').show();
            $('.nav-button').show();
            $('body').css('overflow', 'hidden');
            $('.nav-item a').addClass('colorWhite');
            $('.line').addClass('stroke-white');
            $('.line').removeClass('stroke-black');

            
            
        } else {
            $('body').css('overflow', 'auto');
            if($(this).scrollTop() < 30){
                $('.nav-item a').removeClass('colorWhite');
            }
            $('.line').removeClass('stroke-white');
            $('.line').addClass('stroke-black');
            $('.nav-item').hide();
            $('.nav-button').hide();

        }
    });
    
    function ocultarLi() {
        if ($(window).width() <= 1000) {
            $('.nav-item').hide();
            $('.nav-button').hide();
        } else {
            $('.nav-item').show();
            $('.nav-button').show();
        }
    }

    $(window).resize(function() {
        ocultarLi();
    });
    


    $('.nav-item').mouseenter(function() {
        if ($(window).scrollTop() > 250) {
            $(this).find('a').removeClass('colorBlack');
        }
    }).mouseleave(function() {
        if ($(window).scrollTop() > 250) {
            $(this).find('a').addClass('colorBlack');
        }
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 30) {
            $('.line').addClass('stroke-black');
        } else {
            $('.line').removeClass('stroke-black');
        }
    });
    
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 100) {
            $('.menu').addClass('sticky');
            $('.headerContent').addClass('pt-40');
            $('#logo').find('img').addClass('width150');
            $('#logo').find('img').removeClass('width250');
            
        } else {
            $('.headerContent').removeClass('pt-40');
            $('.menu').removeClass('sticky');
            $('#logo').find('img').addClass('width250');
            $('#logo').find('img').removeClass('width150');
        }
    })
    show('up', 'fotosInstalaciones');
    show('left','.d-options-2');
    show('bottom', '.newsletter');
    show('left', '.topJourneysContent');
    show('right', '.swiper');
    show('right', '.aboutescapeHuntGallery');
    show('left', '.ourHistoryContent');
    show('left', '.feature:first-child');
    show('bottom', '.feature:nth-child(2)');
    show('right', '.feature:last-child');
    show('bottom', '.ourTeamTitle');
    show('left', '.teamCards');
});

var show = (origin, element, distance) => {
    distance === undefined ? distance = '0px' : distance;
    ScrollReveal().reveal(element, {
        duration: 450,
        easing: 'ease-in-out',
        delay: 150,
        origin: origin,
        distance: distance,

    });
}

