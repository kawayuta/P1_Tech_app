$(function () {

    $(function () {

        if($('.field_with_errors').length){
            $('.field_with_errors').css({'background-color': 'transparent'});
            $('.field_with_errors').css({'width': '100%'});
            $('.field_with_errors').parent().css({'border': '1px solid red'});
            $('.field_with_errors').parent().parent().find('p').after('<span class="alert-message">*すでに登録されています</span>');
        }

        $('.sign-up').on('click', function () {

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

            if ($('#user-password').val().length < 6) {
                $('#user-password').parent().css({'border': '1px solid red'});
                $('#user-password').parent().parent().find('.alert-message').remove();
                var msg = ($('#user-password').val().length === 0) ? '*必須項目です' : '6文字以内で入力してください';
                $('#user-password').parent().parent().find('p').after('<span class="alert-message">' + msg + '</span>');
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

            if ($('#graduation_year-field').val().length < 4) {
                $('#graduation_year-field').parent().css({'border': '1px solid red'});
                $('#graduation_year-field').parent().parent().find('.alert-message').remove();
                var msg = ($('#graduation_year-field').val().length === 0) ? '*必須項目です' : '4桁で入力してください';
                $('#graduation_year-field').parent().parent().find('p').after('<span class="alert-message">' + msg + '</span>');
                isValidate = false;
            }else{
                $('#graduation_year-field').parent().css({'border': 'none'});
                $('#graduation_year-field').parent().parent().find('.alert-message').remove();
            }

            if (!isValidate) {
                return false;
            }

            $('#username').val($('#first-name-data').val() + "" + $('#last-name-data').val());

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
