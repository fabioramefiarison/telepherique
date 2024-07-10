// src/components/Carousel.js
import React from 'react';
import Slider from 'react-slick';

const CarouselSlick = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
  };

  return (
    <div className="carousel">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
              <section>
                <div className='carousel-h1-date'>
                  <h1>{image.titre}</h1>
                  <p><i>{image.date}</i></p>
                </div>
                <p>{image.paragraphe}</p>
              </section>
           <section>
              <img src={image.image} alt={`Slide ${index}`} className="carousel-image" />  
           </section>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselSlick;
