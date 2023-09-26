
$(function(){
    $('.nav> li').mouseover(function(){
        $(this).children('.sub').stop().slideDown();
    });
    $('.nav> li').mouseleave(function(){
        $(this).children('.sub').stop().slideUp();
    });
});


$(function(){
    $('.hotelbot .pop1').click(function(){
        $('.popup1').show();
        $('.popup2,.popup3').hide();
    });
    $('.hotelbot .pop2').click(function(){
        $('.popup2').show();
        $('.popup1,.popup3').hide();
    });
    $('.hotelbot .pop3').click(function(){
        $('.popup3').show();
        $('.popup2,.popup1').hide();
    });
    $('.hotelbot li').click(function(){
        $(this).addClass('on').siblings().removeClass('on');
    });
});

