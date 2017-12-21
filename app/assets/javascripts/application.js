// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require rails-ujs
//= require vender/masonry.pkgd.min.js
//= require vender/remodal.min
//= require vender/jquery.infinitescroll.js
//= require turbolinks
//= require_tree .

$(document).on('turbolinks:load', function () {

  $(function () {
    $('#open-menu-btn').click(function () {
      $('#side-menu-wrapper').css('display', 'block');
      $('#side-menu').css('display', 'block').animate({'right': '0'}, 200);
      $('html, body').css('overflow', 'hidden');
      $(window).on('touchmove.noScroll', function(e) {
          e.preventDefault();
      });
    });

    $('#side-menu a').click(function() {
      closeSideMenu();
    })

    $('#close-menu-btn').click(function () {
      closeSideMenu();
    });

    $('#side-menu-wrapper').click(function () {
      closeSideMenu();
    });

    function closeSideMenu() {
      $('#side-menu-wrapper').css('display', 'none');
      $('html, body').css('overflow', 'auto');
      $(window).off('.noScroll');
      $('#side-menu').animate({'right': '-260px'},
        {
          'duration': 200,
          'complete': function () {
            $('#side-menu').css('display', 'none');
          }
        });
    }

    $('#flash-message').fadeIn(800);

    $('#flash-close-btn').click(function() {
      $('#flash-message').css('display', 'none');
    });
  });
});
