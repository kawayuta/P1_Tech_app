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
    });

    $('#title-data').change(function () {
      $('#post_title').val($('#title-data').val());
      $('.post-content h1').append($('#title-data').val());

    });

    $('#detail-data').change(function () {
      $('#post_detail').val($('#detail-data').val());
      $('.post-detail').append($('#detail-data').val());

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


    $('.new-post-term .1week-tern').click(function () {
      $(this).parent().find('.term-item-active').removeClass('term-item-active');
      $(this).addClass('term-item-active');
      $('#post_period').val('0');
      $('.preview-post-term').find('.term-item').removeClass('term-active');
      $('.preview-post-term .term-item-1').addClass('term-active');
    });

    $('.new-post-term .1month-tern').click(function () {
      $(this).parent().find('.term-item-active').removeClass('term-item-active');
      $(this).addClass('term-item-active');
      $('#post_period').val('1');
      $('.preview-post-term').find('.term-item').removeClass('term-active');
      $('.preview-post-term .term-item-2').addClass('term-active');
    });

    $('.new-post-term .3month-tern').click(function () {
      $(this).parent().find('.term-item-active').removeClass('term-item-active');
      $(this).addClass('term-item-active');
      $('#post_period').val('2');
      $('.preview-post-term').find('.term-item').removeClass('term-active');
      $('.preview-post-term .term-item-3').addClass('term-active');
    });

    $('.new-post-term .6month-tern').click(function () {
      $(this).parent().find('.term-item-active').removeClass('term-item-active');
      $(this).addClass('term-item-active');
      $('#post_period').val('3');
      $('.preview-post-term').find('.term-item').removeClass('term-active');
      $('.preview-post-term .term-item-4').addClass('term-active');
    });

    $('.new-post-term .1year-tern').click(function () {
      $(this).parent().find('.term-item-active').removeClass('term-item-active');
      $(this).addClass('term-item-active');
      $('#post_period').val('4');
      $('.preview-post-term').find('.term-item').removeClass('term-active');
      $('.preview-post-term .term-item-5').addClass('term-active');
    });

    $('.post-color-field').click(function () {
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

      $('.term-icon').css({
        "color" : $(this).css("background-color")
      });
      $('.commitment-icon').css({
        "color" : $(this).css("background-color")
      });
      $('.jobtype-icon').css({
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

  $('#modal-support-btn').click(function(){
    $('[data-remodal-id=modal]').remodal().open();
  });

  $('#modal-support-btn-fb').click(function(){
    $('[data-remodal-id=modal]').remodal().close();
    $.ajax({
      url: $('#modal-support-btn-default').attr("href"),
      type: "POST",
      dataType: "html",
      success: function(data) {
        location.reload();
      },
      error: function(data) {
        location.reload()
      }
    });
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
    $('.new-post-slider').slick('slickNext');
    slickCurrent();
    scrollTo( 0, 0);

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
