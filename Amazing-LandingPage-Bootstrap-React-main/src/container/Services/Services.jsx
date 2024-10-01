import React from 'react';
import { Headings } from '../../components';
import { data } from '../../constants';
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs';

import './Services.css';


const Services = () => {
  return (
    <div id="services" className="d-block pt-md-4">
      <Headings title="Services" text="At Easy Banner, we provide AI-powered services to simplify your promotional campaigns. Our platform allows you to generate custom banners tailored to specific themes (e.g., Independence Day, New Year), define promotional offers, and maintain brand consistency with color palettes. Additionally, our AI can create engaging, campaign-specific promotional copy and optimize your reach with AI-driven hashtag recommendations, ensuring maximum visibility and effectiveness across digital ads, social media, and web promotions." />

      <div className="row">
        {data.ServicesData.map(({ titleone, titletwo , link, itemclass, imgURL }, index) => (
          <div className="col-lg-6 col-12" key={index}>
          <div className={`row ${itemclass}`}>
              <div className="col-md-6 box">
             <div>  <span>{titleone} </span> 
               <span>{titletwo}</span> 
               </div>
                <a href={link} alt={titleone} className="readmore"> <BsFillArrowUpRightCircleFill /> Learn more </a>
              </div>
              <div className="col-md-6 text-end"><img src={imgURL} alt={titleone} className="img-fluid img-services" /></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services