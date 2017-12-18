$(document).on('turbolinks:load', function() {

$(function () {
    $('.sign-up-slider').slick({
        dots: false,
        dotsClass: 'slick-dots sign-up-slide-dots',
        slidesToShow: 1,
        arrows: false,
        autoplay: false,
        swipe: false,
        infinite: false
    });

    $('.sign-up-slick-next').on('click', function () {
        $('#username').val($('#first-name-data').val() + "" + $('#last-name-data').val());
        $('.sign-up-slider').slick('slickNext');
    });
});

$(function () {
    $('.profile-image-field input').change(function () {
        var input = this;
        var file = $(this).prop('files')[0];
        if (!file.type.match('image.*')) {
            return;
        }
        var fileReader = new FileReader();
        fileReader.onloadend = function () {
            $(input).parent().find('img').remove();
            $(input).parent().append('<img src="' + fileReader.result + '"/>');
        };
        fileReader.readAsDataURL(file);
    });
});

});