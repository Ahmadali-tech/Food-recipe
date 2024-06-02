import React, { useState, useEffect } from 'react';
import BannarImage1 from '../components/Bannar.jpg';
import BannarImage2 from '../components/Bannner.jpg';
import BannarImage3 from '../components/Bannar2.jpg';
import BannerImage4 from '../components/Bannar3.jpg';
import BannerImage5 from '../components/Bannar4.jpg';
import BannerImage6 from '../components/Bannar5.jpg';
import BannerImage7 from '../components/Bannar6.jpg';
import BannerImage8 from '../components/Bannar7.jpg';
import './Banner.css';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    BannarImage1,
    BannarImage2,
    BannarImage3,
    BannerImage4,
    BannerImage5,
    BannerImage6,
    BannerImage7,
    BannerImage8
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
     currentIndex=== images.lenght-1 ? 0:prevIndex+1
      );
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
  
    <div className="slider">
      {images.map((image, index) => (
        <div key={index} className={index === currentIndex ? 'slide active' : 'slide'}>
          <div className='images'>
        <img src={image} alt={index+1} />
        </div>
        </div>
      ))}
    </div>
    

  );
};

export default Slider;
