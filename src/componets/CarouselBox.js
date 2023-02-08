import React, { useState } from 'react';
import './Carousel.css';

import main_img from "../assets/dashboard.png";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";
import img8 from "../assets/img8.png";
import img9 from "../assets/img9.png";
import img10 from "../assets/img10.png";
import img11 from "../assets/img11.png";
import img12 from "../assets/img12.png";
import img13 from "../assets/img13.png";



const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { url: main_img },
    { url: img1 },
    { url: img2 },
    { url: img3 },
    { url: img4 },
    { url: img5 },
    { url: img6 },
    { url: img7 },
    { url: img8 },
    { url: img9 },
    { url: img10 },
    { url: img11 },
     {url: img12 },
    { url: img13 }
  ];

  const handlePrev = () => {
    setCurrentIndex((currentIndex + images.length - 1) % images.length);
    console.log(`Numer indeksy zdjecia: ${currentIndex}`);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
    console.log(`Numer indeksy zdjecia: ${currentIndex}`);
  };

  return (
    <div className="carousel">
      <img
        className="carousel-image"
        src={images[currentIndex].url}
        alt="slide"
      />
      <button className="carousel-button prev" onClick={handlePrev}>
        <div className="carousel-button-arrow prev-arrow"></div>
      </button>
      <button className="carousel-button next" onClick={handleNext}>
        <div className="carousel-button-arrow next-arrow"></div>
      </button>
    </div>
  );
};

export default Carousel;




