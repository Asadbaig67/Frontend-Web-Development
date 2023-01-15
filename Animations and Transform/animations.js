$('#btn').click(function () {
    if ($('.box').hasClass('animation')) {
        $('.box').removeClass('animation');
        $('.box').addClass('toggle');
    }
    else {
        $('.box').removeClass('toggle');
        $('.box').addClass('animation');
    }

});