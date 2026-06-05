import React from 'react'
import swiggy from "../images/swiggy.webp";
import zomato from "../images/zomato.webp";
import kfc from "../images/kfc_png.webp";
const Hero = () => {
  return (
    <div className='Hero'>
       <div className='left'>
        <span className='title'>TASTE THE BEST KFC CHICKEN</span>
        <p className='matter'>
          KFC (Kentucky Fried Chicken) is one of the world's most popular fast-food brands,
           famous for its crispy and flavorful fried chicken. It was founded by Colonel Harland Sanders, 
           who developed a unique recipe made with a secret blend of 11 herbs and spices. KFC chicken is prepared using a special pressure-frying method that helps keep the meat juicy and tender while creating a crispy outer coating. Since its first franchise opened in 1952, KFC has expanded to thousands of restaurants across the world and continues to attract millions of customers with its Original Recipe chicken, burgers, wraps, and chicken buckets.
            The brand is known for its quality, distinctive taste, and the famous slogan "It's Finger Lickin' Good."
        </p>
        <div className="btns">
          <button className='btn1'>ORDER NOW</button>
          <button className='btn2'>KFC CHICKEN</button>
        </div>
      <div className='socila'>
      <span className='social-1'>Also Avaliable On</span>
      <div className='social-icons'>
        <img src={swiggy} alt="" /><img src={zomato} alt="" />
      </div>
    </div>
    </div>
    <div className='right'>
      <img src={kfc} alt="" />
    </div>
    </div>
   
    
  );
};

export default Hero