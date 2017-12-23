$(document).on('turbolinks:load', function() {

  // $('#group-message-textarea').focus(function() {
  //   $(this).css('height', '60px');
  // });
  // $('#group-message-textarea').blur(function() {
  //   $(this).css('height', '24px');
  // });

  $('#room-menu-open-btn').click(function() {
    $(this).css('display', 'none');
    $('#room-menu-close-btn').css('display', 'block');
    $('#room-menu').slideDown('fast');
  });
  $('#room-menu-close-btn').click(function() {
    $(this).css('display', 'none');
    $('#room-menu-open-btn').css('display', 'block');
    $('#room-menu').slideUp('fast');
  });
});
