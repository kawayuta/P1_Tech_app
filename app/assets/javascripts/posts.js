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

  $('.posts-post').click(function(){
    if ($('#posts-post_single').css('display') == 'none') {
      $(this).addClass('posts-post_open');
      $('#posts-post_single').slideDown('slow');
    } else {
      $(this).removeClass('posts-post_open');
      $('#posts-post_single').slideUp('fast');
    }
  })

});

});

