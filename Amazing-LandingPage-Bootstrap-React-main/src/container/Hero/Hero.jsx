import React from 'react';
import { useNavigate } from 'react-router-dom';
import { images } from '../../constants';
import { IconScroll } from '../../components';
import './Hero.css';

const logos = ["logo01", "logo02", "logo03", "logo04", "logo05", "logo06"];

const Hero = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("Let's Get Started button clicked");
    navigate('/upload');
  };

  return (
    <div className="hero">
      <div className="row align-items-center">
        <div className="col-md-6 col-12">
          <h1 className="title">EasyBanner</h1>
          <p className="py-4">Introducing Easy Banner, an innovative AI-driven solution designed to transform the way businesses create promotional content. With Easy Banner, we harness the power of artificial intelligence to generate stunning banners and engaging videos effortlessly, catering to the unique needs of each campaign</p>
          <button className="btn-positivus" onClick={handleClick}>Let's Get Started</button>
        </div>
        <div className="col-md-6 col-12 mt-md-0 mt-4">
          <img className="img-fluid" src={images.hero} alt="design" />
        </div>
      </div>
      
      <div className="clients">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={images[logo]}
            alt={images[logo]}
          />
        ))}
      </div>
      <IconScroll />
    </div>
  );
};

export default Hero;