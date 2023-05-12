import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import {slider} from "../../Data/data"
import "./style.scss"

const Slide = () => {
  return (
    <>
      <section>
      <Swiper
      spaceBetween={50}
      slidesPerView={1}
      autoplay={true}
      navigation={true}
      modules={[Navigation, EffectFade]}
      loop={true}
      effect={"fade"}
      >
      
      {slider.map((item, index) => {
            return (
              <SwiperSlide>
               <div className='slide-container'>
                <div className="description">
                <h1>{item.Title}</h1>
                <h1>{item.Title2}</h1>
                <p>{item.Period}</p>
                <h1>{item.Description}</h1>
                <h1>{item.Price}</h1>
                <h1>{item.expences}</h1>
                
                <div className='mack'>

                  <div >
                  <h1>{item.Time}</h1>
                  <h1 >{item.indikiqiymet}</h1>
                  <div className="lineV"></div>
                  </div>
                 <div className="discount">
                  <h1>{item.Discount}</h1>
                  <h1>{item.Discounted}</h1>
                 </div>
                 
                </div>
                <button>Indi alın</button>
                </div>
                 
                <img src={item.img} alt="" />
              </div>
        </SwiperSlide>
            );
          })}
      </Swiper>
          
       
      </section>
    </>
  );
 
};



export default Slide