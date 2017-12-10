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
  })
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
  })

  $('.posts-post-new-open').click(function(){
    $('#posts-post-new').slideDown('fast');
  })


  $('.posts-post-new-close').click(function(){
    $('#posts-post-new').slideUp('fast');
  })


  $('.new-post-slider').slick({
    dots: true,
    dotsClass: 'slick-dots new-post-slide-dots',
    slidesToShow: 1,
    arrows: false,
    autoplay: false,
    swipe: false,
  });


});

});
