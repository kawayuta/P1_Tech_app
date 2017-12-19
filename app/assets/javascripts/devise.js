$(document).on('turbolinks:load', function () {

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
            // validate input value
            var isValidate = true;

            if ($('#first-name-data').val() === '') {
                $('#first-name-data').parent().css({'border': '1px solid red'});
                $('#first-name-data').parent().parent().find('.alert-message').remove();
                $('#first-name-data').parent().parent().find('p').after('<span class="alert-message">*必須項目です</span>');
                isValidate = false;
            }else{
                $('#first-name-data').parent().css({'border': 'none'});
                $('#first-name-data').parent().parent().find('.alert-message').remove();
            }

            if ($('#last-name-data').val() === '') {
                $('#last-name-data').parent().css({'border': '1px solid red'});
                $('#last-name-data').parent().parent().find('.alert-message').remove();
                $('#last-name-data').parent().parent().find('p').after('<span class="alert-message">*必須項目です</span>');
                isValidate = false;
            }else{
                $('#last-name-data').parent().css({'border': 'none'});
                $('#last-name-data').parent().parent().find('.alert-message').remove();
            }

            if ($('#user-email').val() === '') {
                $('#user-email').parent().css({'border': '1px solid red'});
                $('#user-email').parent().parent().find('.alert-message').remove();
                $('#user-email').parent().parent().find('p').after('<span class="alert-message">*必須項目です</span>');
                isValidate = false;
            }else{
                $('#user-email').parent().css({'border': 'none'});
                $('#user-email').parent().parent().find('.alert-message').remove();
            }

            if ($('#user-password').val() === '') {
                $('#user-password').parent().css({'border': '1px solid red'});
                $('#user-password').parent().parent().find('.alert-message').remove();
                $('#user-password').parent().parent().find('p').after('<span class="alert-message">*必須項目です</span>');
                isValidate = false;
            }else{
                $('#user-password').parent().css({'border': 'none'});
                $('#user-password').parent().parent().find('.alert-message').remove();
            }

            if ($('#user-password-confirmation').val() === '') {
                $('#user-password-confirmation').parent().css({'border': '1px solid red'});
                $('#user-password-confirmation').parent().parent().find('.alert-message').remove();
                $('#user-password-confirmation').parent().parent().find('p').after('<span class="alert-message">*必須項目です</span>');
                isValidate = false;
            }else{
                $('#user-password-confirmation').parent().css({'border': 'none'});
                $('#user-password-confirmation').parent().parent().find('.alert-message').remove();
            }

            if (!isValidate) {
                return true;
            }

            $('#username').val($('#first-name-data').val() + "" + $('#last-name-data').val());
            if (!gon.user) {
                $('.back-icon').show()
            }
            $('.sign-up-slider').slick('slickNext');
            $('#sign-up').scrollTop(0);
        });

        $('.back-icon').on('click', function () {
            $('#sign-up').scrollTop(0);
            $('.back-icon').hide();
            $('.sign-up-slider').slick('slickPrev');
        });

        $('.sign-up').on('click', function () {

            // validate input value
            var isValidate = true;

            if ($('#college-field').val() === '') {
                $('#college-field').parent().css({'border': '1px solid red'});
                $('#college-field').parent().parent().find('.alert-message').remove();
                $('#college-field').parent().parent().find('p').after('<span class="alert-message">*必須項目です</span>');
                isValidate = false;
            }else{
                $('#college-field').parent().css({'border': 'none'});
                $('#college-field').parent().parent().find('.alert-message').remove();
            }

            if ($('#major-field').val() === '') {
                $('#major-field').parent().css({'border': '1px solid red'});
                $('#major-field').parent().parent().find('.alert-message').remove();
                $('#major-field').parent().parent().find('p').after('<span class="alert-message">*必須項目です</span>');
                isValidate = false;
            }else{
                $('#major-field').parent().css({'border': 'none'});
                $('#major-field').parent().parent().find('.alert-message').remove();
            }

            if ($('#graduation_year-field').val() === '') {
                $('#graduation_year-field').parent().css({'border': '1px solid red'});
                $('#graduation_year-field').parent().parent().find('.alert-message').remove();
                $('#graduation_year-field').parent().parent().find('p').after('<span class="alert-message">*必須項目です</span>');
                isValidate = false;
            }else{
                $('#graduation_year-field').parent().css({'border': 'none'});
                $('#graduation_year-field').parent().parent().find('.alert-message').remove();
            }

            if (!isValidate) {
                return false;
            }

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