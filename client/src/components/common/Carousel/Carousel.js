import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CarouselComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [
    `${process.env.PUBLIC_URL}/images/another.jpg`,
    `${process.env.PUBLIC_URL}/images/another2.jpg`,
    `${process.env.PUBLIC_URL}/images/background-home.jpg`,
  ];

  return (
    <div>
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div key={idx}>
            <img src={img} alt={`Slide ${idx}`} style={{ width: '100%', height: 'auto' }} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselComponent;