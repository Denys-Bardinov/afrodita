$(function () {
                $('.burger_trigger').click(function () {
                    $('.menu').toggleClass('menu_opened');
                });
            });


    $('#box1').click(function () {
        $('#iddiv1').toggle($(this).prop('checked'));
    });

    $('#box2').click(function () {
        $('#iddiv2').toggle($(this).prop('checked'));
    });

    $('#box3').click(function () {
        $('#iddiv3').toggle($(this).prop('checked'));
    });
    
    $(function(){
        $('.tabs a').click(function() {
           $(this).parents('.tab-wrap').find('.tab-cont').addClass('hide');
           $(this).parent().siblings().removeClass('active');
           var id = $(this).attr('href');
           $(id).removeClass('hide');
           $(this).parent().addClass('active');
           return false
        });
    });