export const Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1500,
          settings: {
            slidesToShow: 5.5,
            slidesToScroll: 4,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 3.5,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 2.5,
            slidesToScroll: 2,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2.5,
            slidesToScroll: 2,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]}