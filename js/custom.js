$(document).ready(function() {
    $(window).on('scroll', function(){
        if($(window).scrollTop() > 5) {
            $("header").addClass("sticky");
        }else {
            $("header").removeClass("sticky");
        }
    })

    $('.counter-box h4 span').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 2000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
});