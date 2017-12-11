$(document).on('turbolinks:load', function() {
  $('.ranking-slider').slick({
    dots: true,
    dotsClass: 'slick-dots ranking-slide-dots',
    slidesToShow: 1,
    centerMode: true,
    centerPadding: '20px',
    arrows: false,
    autoplay: true,
    autoplaySpeed: 10000,
  });

  $("#top-posts .page").infinitescroll({
    loading: {
      img: "/assets/loading_image.gif",
      msgText: ""
    },
    navSelector: "nav.pagination",
    nextSelector: "nav.pagination a[rel=next]",
    itemSelector: "#top-posts div.posts"
  });

});
