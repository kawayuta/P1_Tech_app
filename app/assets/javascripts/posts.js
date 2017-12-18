$(document).on('turbolinks:load', function() {


$(function () {


    $('.template-item').click(function () {
      $('.template-name').removeClass('template-item-selected');
      $(this).find('.template-name').addClass('template-item-selected')
      $('#post_template_id').val($(this).attr('id'));
      $('.template-format').css({
        'background-image': this.getAttribute('style').split(' ')[1].replace(';', ''),
      });
      $('#post-preview-template').css({
        'background-image': this.getAttribute('style').split(' ')[1].replace(';', ''),
        'width': '350px',
        'height': '200px',
        'margin': '0 auto',
        'background-size': 'cover',
        'border-radius': '5px',
      });
    });


    $('#post_title').change(function () {
      $('#post-preview-title').children('.category-name').text($('#post_title').val());
    });
    $('#post_outline').change(function () {
      $('#post-preview-outline').text($('#post_outline').val());
    });
    $('#post_detail').change(function () {
      $('#post-preview-detail').text($('#post_detail').val());
    });

    $('#close-modal').click(function () {
      $('#post-modal-wrapper').css('display', 'none');
    });



    $('.category').click(function () {
      $(this).parent().find('.category-checked').removeClass('category-checked');
      $(this).addClass('category-checked');
      $('#post_category_name').val($(this).text().replace(/^\s+|\s+$/g,''));
      if ($('#post_category_name').val() == 'Game') {
        $('.post-header .post-icon-data').find('.post-show-icon').remove();
        $('.post-header .post-icon-data').append('<i class="fa fa-gamepad post-show-icon"></i>');
      }
    });


    $('#title-data').change(function () {
      $('#post_title').val($('#title-data').val());
      $('.new-post-preview-title').text($('#title-data').val());

    });

    $('#detail-data').change(function () {
      $('#post_detail').val($('#detail-data').val());
      $('.post-detail').append($('#detail-data').val());

    });


  $('.post_period_data').change(function () {
    $('.preview_post_period_data_sub span').text('');
    $('.preview_post_period_data_sub span').append($(this).val());
  });


  $('.post_scale_data').change(function () {
    $('.preview_post_scale_data_sub span').text('');
    $('.preview_post_scale_data_sub span').append($(this).val());
  });




    $('.jobtype-minus-btn').click(function () {
      if (Number($(this).siblings('.jobtype-num').val()) > 0) {
        $(this).siblings('.jobtype-num').val(Number($(this).siblings('.jobtype-num').val()) - 1);
      } else {

      }
      if (Number($(this).siblings('.jobtype-num').val()) == 0) {
        $(this).addClass('disabled');
      }
      $('#post_num_of_planner').val($('#jobtype-planner').val());
      $('#post_num_of_engineer').val($('#jobtype-engineer').val());
      $('#post_num_of_designer').val($('#jobtype-designer').val());

      $('.planner-icon').remove();
      $('.engineer-icon').remove();
      $('.designer-icon').remove();
      $('.jobtype-icon-list').remove();
      $('.jobtype-label-box span').remove();

      if($('#post_num_of_planner').val() > 0) {
        $('.jobtype-icon-list-box').append('<div class="jobtype-icon-list"><div class="jobtype-icon-box jobtype-icon-box_planner"></div></div>');
        $('.jobtype-label-box').append('<span>プランナー</span>');
      }
      if($('#post_num_of_engineer').val() > 0) {
        $('.jobtype-icon-list-box').append('<div class="jobtype-icon-list"><div class="jobtype-icon-box jobtype-icon-box_engineer"></div></div>');
        $('.jobtype-label-box').append('<span>エンジニア</span>');

      }
      if($('#post_num_of_designer').val() > 0) {
        $('.jobtype-icon-list-box').append('<div class="jobtype-icon-list"><div class="jobtype-icon-box jobtype-icon-box_planner"></div></div>');
        $('.jobtype-label-box').append('<span>デザイナー</span>');
      }


      for (var i = 0; i < $('#post_num_of_planner').val(); i++){
        $('.jobtype-icon-box_planner').append('<i class="fa fa-male jobtype-icon planner-icon"></i>');
      }
      for (var i = 0; i < $('#post_num_of_engineer').val(); i++){
        $('.jobtype-icon-box_engineer').append('<i class="fa fa-male jobtype-icon engineer-icon"></i>');
      }
      for (var i = 0; i < $('#post_num_of_designer').val(); i++){
        $('.jobtype-icon-box_designer').append('<i class="fa fa-male jobtype-icon designer-icon"></i>');
      }

    });

    $('.jobtype-plus-btn').click(function () {
      var $minusBtn = $(this).siblings('.jobtype-minus-btn');
      if (Number($(this).siblings('.jobtype-num').val()) < 10) {
        $(this).siblings('.jobtype-num').val(Number($(this).siblings('.jobtype-num').val()) + 1);
      } else {

      }
      if ($minusBtn.hasClass('disabled')) {
        $minusBtn.removeClass('disabled');
      }

      $('#post_num_of_planner').val($('#jobtype-planner').val());
      $('#post_num_of_engineer').val($('#jobtype-engineer').val());
      $('#post_num_of_designer').val($('#jobtype-designer').val());

      $('.planner-icon').remove();
      $('.engineer-icon').remove();
      $('.designer-icon').remove();
      $('.jobtype-icon-list').remove();
      $('.jobtype-label-box span').remove();

      if($('#post_num_of_planner').val() > 0) {
        $('.jobtype-icon-list-box').append('<div class="jobtype-icon-list"><div class="jobtype-icon-box jobtype-icon-box_planner"></div></div>');
        $('.jobtype-label-box').append('<span>プランナー</span>');
      }
      if($('#post_num_of_engineer').val() > 0) {
        $('.jobtype-icon-list-box').append('<div class="jobtype-icon-list"><div class="jobtype-icon-box jobtype-icon-box_engineer"></div></div>');
        $('.jobtype-label-box').append('<span>エンジニア</span>');

      }
      if($('#post_num_of_designer').val() > 0) {
        $('.jobtype-icon-list-box').append('<div class="jobtype-icon-list"><div class="jobtype-icon-box jobtype-icon-box_planner"></div></div>');
        $('.jobtype-label-box').append('<span>デザイナー</span>');
      }


      for (var i = 0; i < $('#post_num_of_planner').val(); i++){
        $('.jobtype-icon-box_planner').append('<i class="fa fa-male jobtype-icon planner-icon"></i>');
      }
      for (var i = 0; i < $('#post_num_of_engineer').val(); i++){
        $('.jobtype-icon-box_engineer').append('<i class="fa fa-male jobtype-icon engineer-icon"></i>');
      }
      for (var i = 0; i < $('#post_num_of_designer').val(); i++) {
        $('.jobtype-icon-box_designer').append('<i class="fa fa-male jobtype-icon designer-icon"></i>');
      }
    });

    $('.new-post-commitment .commitment-level-1').click(function () {
      $(this).parent().find('.commitment-item-active').removeClass('commitment-item-active');
      $(this).addClass('commitment-item-active');
      $('#post_motivation').val('0');
      $('.preview-post-commitment').find('.commitment-item').removeClass('commitment-item-active');
      $('.preview-post-commitment .commitment-item-1').addClass('commitment-item-active');

    });

    $('.new-post-commitment .commitment-level-2').click(function () {
      $(this).parent().find('.commitment-item-active').removeClass('commitment-item-active');
      $(this).addClass('commitment-item-active');
      $('#post_motivation').val('1');
      $('.preview-post-commitment').find('.commitment-item').removeClass('commitment-item-active');
      $('.preview-post-commitment .commitment-item-2').addClass('commitment-item-active');
    });

    $('.new-post-commitment .commitment-level-3').click(function () {
      $(this).parent().find('.commitment-item-active').removeClass('commitment-item-active');
      $(this).addClass('commitment-item-active');
      $('#post_motivation').val('2');
      $('.preview-post-commitment').find('.commitment-item').removeClass('commitment-item-active');
      $('.preview-post-commitment .commitment-item-3').addClass('commitment-item-active');
    });

    $('.new-post-commitment .commitment-level-4').click(function () {
      $(this).parent().find('.commitment-item-active').removeClass('commitment-item-active');
      $(this).addClass('commitment-item-active');
      $('#post_motivation').val('3');
      $('.preview-post-commitment').find('.commitment-item').removeClass('commitment-item-active');
      $('.preview-post-commitment .commitment-item-4').addClass('commitment-item-active');
    });

    $('.new-post-commitment .commitment-level-5').click(function () {
      $(this).parent().find('.commitment-item-active').removeClass('commitment-item-active');
      $(this).addClass('commitment-item-active');
      $('#post_motivation').val('4');
      $('.preview-post-commitment').find('.commitment-item').removeClass('commitment-item-active');
      $('.preview-post-commitment .commitment-item-5').addClass('commitment-item-active');
    });

    $('.post-color-field').click(function () {
      $(this).parent().find('.post-color-field').removeAttr('style');
      $(this).css('width', '60px');
      $(this).css('height', '60px');
      $(this).css('margin-top', '5px');
      $('#main_color').val($(this).css("background-color"));
      $('.post-header').css({
        "background-color" : $(this).css("background-color")
      });
      $('.term-active span').css({
        'color': $(this).css("background-color")
      });
      $('.status-icon').css({
        "color" : $(this).css("background-color")
      });
      $('.status-label').css({
        "color" : $(this).css("background-color")
      });
      $('.preview_post_period_data_sub').css({
        "color" : $(this).css("background-color")
      });

      $('.preview_post_scale_data_sub').css({
        "color" : $(this).css("background-color")
      });
      $('.commitment-icon').css({
        "color" : $(this).css("background-color")
      });
      $('.jobtype-icon').css({
        "color" : $(this).css("background-color")
      });
      $('h2 i').css({
        "color" : $(this).css("background-color")
      });
    });


    $(function () {
      $('.post-image-field input').change(function () {
        var input = this;
        var file = $(this).prop('files')[0];
        if (!file.type.match('image.*')) {
          return;
        }
        var fileReader = new FileReader();
        fileReader.onloadend = function () {
          $(input).parent().find('img').remove();
          $(input).parent().append('<img src="' + fileReader.result + '"/>');
        }
        fileReader.readAsDataURL(file);
      });
    });



  $('.posts').masonry({
    itemSelector: '.posts-post'
  });

  // $('.posts-post').hover(function() {
  //   var link = this.children[1].children[0].getAttribute('href');
  //   var t = setTimeout(function() {
  //     location.href = link
  //   }, 5000);
  //   $(this).data('timeout', t);
  // }, function() {
  //   clearTimeout($(this).data('timeout'));
  // });

  $('.modal-support-btn').click(function(){
    var postId = $(this).attr('data-post-id');
    var url = $(this).attr('data-url');
    $('#modal-support-btn-fb').attr('href', 'http://www.facebook.com/sharer.php?u=' + url);
    $('#modal-support-btn-tw').attr('href', 'http://twitter.com/share?url=' + url);
    $('#share-modal-overlay').css('display', 'block');
    // $('[data-post-id=' + postId + '][data-remodal-id=modal]' ).remodal().open();
  });

  $('#share-modal-overlay').click(function() {
    $(this).css('display', 'none');
  });

  $('#modal-support-btn-tw').click(function() {
    $('#share-modal-overlay').css('display', 'none');
    // $('[data-remodal-id=modal]').remodal().close();
  })

  $('#modal-support-btn-fb').click(function(){
    $('#share-modal-overlay').css('display', 'none');
    // $('[data-remodal-id=modal]').remodal().close();
    // $.ajax({
    //   url: $('#modal-support-btn-default').attr("href"),
    //   type: "POST",
    //   dataType: "html",
    //   success: function(data) {
    //     location.reload();
    //   },
    //   error: function(data) {
    //     location.reload()
    //   }
    // });
  });

  $('.new-post-slider').slick({
    dots: true,
    dotsClass: 'slick-dots new-post-slide-dots',
    slidesToShow: 1,
    arrows: false,
    autoplay: false,
    swipe: false,
    infinite: false,
  });

  $('.new-post-btn').click(function(){

    $('#posts-post-new').slideDown('fast');
    $('.new-post-slider').slick('setPosition');
    scrollTo( 0, 0);
  });

  $('.new-post-btn-close').click(function(){
    $('#posts-post-new').slideUp('fast');
  });

  $('.new-post-btn-prev').click(function(){
    $('.new-post-slider').slick('slickPrev');
    slickCurrent();
    scrollTo( 0, 0);


  });


  $('.new-post-slick-next').on('click', function () {
    $('#posts-post-new').scrollTop( 0 );
    var currentPage = $('.new-post-slider').slick('slickCurrentSlide') + 1;

    var ValidityTitle = ($('#post_title').val().replace(/^\s+|\s+$/g,'') != '') ? true : false;
    var ValidityDetail = ($('#post_detail').val().replace(/^\s+|\s+$/g,'') != '') ? true : false;
    var ValidityCategory = ($('#post_category_name').val().replace(/^\s+|\s+$/g,'') != '') ? true : false;

    var ValidityMember = ($('#post_num_of_planner').val() > 0 && $('#post_num_of_planner').val() < 11 || $('#post_num_of_engineer').val() > 0 && $('#post_num_of_engineer').val() < 11 || $('#post_num_of_designer').val() > 0 && $('#post_num_of_designer').val() < 11) ? true : false;
    var ValidityPeriod = ($('.post_period_data').val() > 0 && $('.post_period_data').val() < 25 ) ? true : false;

    var MemberCount = (Number($('#post_num_of_planner').val()) + Number($('#post_num_of_engineer').val()) + Number($('#post_num_of_designer').val()));
    var ValidityScale = ($('.post_scale_data').val() >= MemberCount && $('.post_scale_data').val() > 0 && $('.post_scale_data').val() < 101) ? true : false;

    $('.new-post-slider').find('.post-form-alerts').remove();

    if (currentPage == 1 && ValidityTitle && ValidityDetail && ValidityCategory) {
      $('.new-post-slider').slick('slickNext');
      slickCurrent();
    } else if(currentPage == 1 && ValidityTitle == false || ValidityDetail == false || ValidityCategory == false) {
      $('.new-post-slider').prepend('<div class="post-form-alerts"></div>');

      if(currentPage == 1 && ValidityCategory == false) {
        $('.post-form-alerts').append('<span class="post-form-alert">アイコンを選択してください。</span>');
      }
      if(currentPage == 1 && ValidityTitle == false) {
        $('.post-form-alerts').append('<span class="post-form-alert">タイトルを入力してください。</span>');
      }
      if(currentPage == 1 && ValidityDetail == false) {
        $('.post-form-alerts').append('<span class="post-form-alert">詳細を入力してください。</span>');
      }
    }

    if (currentPage == 2 && ValidityMember && ValidityPeriod && ValidityScale) {
      $('.new-post-slider').slick('slickNext');
      slickCurrent();
    } else if (currentPage == 2 && ValidityMember == false || ValidityPeriod == false || ValidityScale == false) {
      $('.new-post-slider').prepend('<div class="post-form-alerts"></div>');
      if(currentPage == 2 && ValidityMember  == false) {
        $('.post-form-alerts').append('<span class="post-form-alert">募集する役割の人数を追加してください。</span>');
      }

      if(currentPage == 2 && ValidityPeriod  == false) {
        $('.post-form-alerts').append('<span class="post-form-alert">目標製作期間を入力してください。</span>');
      }

      if(currentPage == 2 && ValidityScale  == false) {
        $('.post-form-alerts').append('<span class="post-form-alert">開発規模を入力してください。(募集役割の人数以上)</span>');
      }
    }

    if (currentPage == 3) {
      slickCurrent();
    }


  });


  function slickCurrent () {
    var currentPage = $('.new-post-slider').slick('slickCurrentSlide') + 1;
    if (currentPage == 1) {
      $('.new-post-btn-close').css({'display': 'block'});
      $('.new-post-btn-prev').css({'display': 'none'});
      $('.new-post-slick-next').css({'display': 'block'});
      $('.new-post-btn-private').css({'display': 'none'});
      $('.new-post-btn-public').css({'display': 'none'});
      $('.post-color-field-list-wrapper').css({'display': 'none'});
    } else if (currentPage == 2) {
      $('.new-post-btn-close').css({'display': 'none'});
      $('.new-post-btn-prev').css({'display': 'block'});
      $('.new-post-slick-next').css({'display': 'block'});
      $('.new-post-btn-private').css({'display': 'none'});
      $('.new-post-btn-public').css({'display': 'none'});
      $('.post-color-field-list-wrapper').css({'display': 'none'});

    } else if (currentPage == 3) {
      $('.new-post-btn-close').css({'display': 'none'});
      $('.new-post-btn-prev').css({'display': 'block'});
      $('.new-post-slick-next').css({'display': 'none'});
      $('.new-post-btn-private').css({'display': 'block'});
      $('.new-post-btn-public').css({'display': 'block'});
      $('.post-color-field-list-wrapper').css({'display': 'block'});
    }
  }


});



});
