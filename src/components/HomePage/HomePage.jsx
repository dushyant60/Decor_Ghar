import React from 'react';
import "./HomePage.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const HomePage = () => {
  return (
    <div className='homePage'>
      <div className="intro-container">
        <div className="intro-text">
          <h1>Welcome to Decor Ghar</h1>
          <p>Your trusted partner in interior design.</p>
          <div className="cta-buttons">
            <a href="#contact" className="cta-button">Contact Us</a>
            <a href="#portfolio" className="cta-button">Portfolio</a>
          </div>
        </div>
      </div>
      <div className="featured-services">
        <h2>Our Featured Services</h2>
        <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true} showStatus={false} showArrows={false}>
          <div>
            <img src="../images/service1Img.jpg" alt="Service 1" />
            <h3>Interior Design</h3>
            <p>Transform your living space with our expert interior design services.</p>
          </div>
          <div>
            <img src="../images/service2.jpg" alt="Service 2" />
            <h3>Renovation</h3>
            <p>Give your home a fresh look with our renovation solutions.</p>
          </div>
          <div>
            <img src="../images/service3.jpg" alt="Service 3" />
            <h3>Custom Furniture</h3>
            <p>Create unique and beautiful furniture tailored to your style.</p>
          </div>
        </Carousel>
      </div>
    </div>
  )
}

export default HomePage;
