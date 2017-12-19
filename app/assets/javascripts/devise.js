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
        if (!gon.user) {
            $('.back-icon').show()
        }
        $('.sign-up-slider').slick('slickNext');
    });

    $('.back-icon').on('click', function () {
        $('.back-icon').hide();
        $('.sign-up-slider').slick('slickPrev');
    });

    $('.sign-up').on('click', function () {
       if (gon.user) {
           $('#user-profile-image').val(gon.user.image);
           $('#username').val(gon.user.username);
           $('#user-email').val(gon.user.email);
           $('#user-password').val(gon.user.encrypted_password);
           $('#provider').val(gon.user.provider);
           $('#fb-uid').val(gon.user.uid);
       }
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