$(function(){
    function Slide(){
        var imgs=$('.slides').find('img');
        imgs.eq(0).fadeOut(2000,function(){imgs.eq(0).appendTo($('.slides')); });
        imgs.eq(1).fadeIn(2000)
    }
    setInterval(Slide,1000);

    $('#gnb>ul>.one').on('mouseenter', function () {
        if ($(window).width() > 1024) {
        $(this).find('.sub').stop().slideDown(200);
        // $('.sub_bg').stop().slideDown(200);
        }
    });
    $('#gnb>ul>.one').on('mouseleave', function () {
        if ($(window).width() > 1024) {
        $(this).find('.sub').stop().slideUp(200);
        // $('.sub_bg').stop().slideUp(200);
        }
    });
});