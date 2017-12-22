$(document).on('turbolinks:load', function() {

  $('.ranking-slider').slick({
    dots: true,
    dotsClass: 'slick-dots ranking-slide-dots',
    slidesToShow: 3,
    centerMode: true,
    centerPadding: '80px',
    arrows: false,
    autoplay: true,
    autoplaySpeed: 10000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerPadding: '200px',
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: '20px',
        }
      }
    ]
  });

});
