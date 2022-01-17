

$(function () {

    $('#clock').countdown('2021/11/25', function(event) {
        let daysText = declOfNum(event.offset.days, ['день', 'дня', 'дней']);
         let hoursText = declOfNum(event.offset.hours, ['час', 'часа', 'часов']);
         let minutesText = declOfNum(event.offset.minutes, ['минута', 'минуты', 'минут']);
        $(this).html(event.strftime('<div>%D <div class="sub-slog">'+daysText+'</div></div><span>:</span><div>%H<div class="sub-slog">'+hoursText+'</div></div><span>:</span><div>%M <div class="sub-slog">'+minutesText+'</div></div>'));
    });

    $('a[href^="#"]').on('click', function(event) {
        // отменяем стандартное действие
        event.preventDefault();

        var sc = $(this).attr("href"),
            dn = $(sc).offset().top-130;

        $('html, body').animate({scrollTop: dn}, 1000);
    });

    $('.wrp').parent('.container').css({'max-width':'100%', 'padding':'0'});
})

function declOfNum(number, titles) {
    let cases = [2, 0, 1, 1, 1, 2];
    return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
}

const swiperBlackFriday2021 = new Swiper('.swiper-black-friday-2021', {
    slidesPerView: 5,
    spaceBetween: 0,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 5,
        }
    }
});





