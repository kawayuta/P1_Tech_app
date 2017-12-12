$(document).on('turbolinks:load', function() {


$(function () {


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

  });


  $('.new-post-slick-next').on('click', function () {
    $('.new-post-slider').slick('slickNext');
    slickCurrent();
  });


  function slickCurrent () {
    var currentPage = $('.new-post-slider').slick('slickCurrentSlide') + 1;
    if (currentPage == 1) {
      $('.new-post-btn-close').css({'display': 'block'});
      $('.new-post-btn-prev').css({'display': 'none'});
      $('.new-post-slick-next').css({'display': 'block'});
      $('.new-post-btn-private').css({'display': 'none'});
      $('.new-post-btn-public').css({'display': 'none'});


    } else if (currentPage == 2) {
      $('.new-post-btn-close').css({'display': 'none'});
      $('.new-post-btn-prev').css({'display': 'block'});
      $('.new-post-slick-next').css({'display': 'block'});
      $('.new-post-btn-private').css({'display': 'none'});
      $('.new-post-btn-public').css({'display': 'none'});

    } else if (currentPage == 3) {
      $('.new-post-btn-close').css({'display': 'none'});
      $('.new-post-btn-prev').css({'display': 'block'});
      $('.new-post-slick-next').css({'display': 'none'});
      $('.new-post-btn-private').css({'display': 'block'});
      $('.new-post-btn-public').css({'display': 'block'});
    }
  }


});



});
