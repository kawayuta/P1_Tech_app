$(document).on('turbolinks:load', function() {
  window.scrollTo(0, document.body.scrollHeight);
  $('#group-message-textarea').focus(function() {
    $(this).css('height', '60px');
    $('#talk-room-wrapper').css('margin-bottom', '110px');
    window.scrollBy(0, 24);
  });
  $('#group-message-textarea').blur(function() {
    $(this).css('height', '24px');
    window.scrollBy(0, -24);
    $('#talk-room-wrapper').css('margin-bottom', '74px');
  });

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
