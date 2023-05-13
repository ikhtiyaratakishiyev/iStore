import 'bootstrap/dist/css/bootstrap.min.css';

import { Carousel } from 'react-bootstrap';
import airpods from "../../Assets/Image/airpods.jpg"
import Applewatch from "../../Assets/Image/Applewatch.jpg"
import iPhone14 from "../../Assets/Image/iPhone14.jpg"
import Mackbook from "../../Assets/Image/Mackbook.jpg"
import mackbook2 from "../../Assets/Image/Mackbook2.jpg"
import iPad from "../../Assets/Image/iPad.jpg"
import Aeno from "../../Assets/Image/Aeno.jpg"
import mack from "../../Assets/Image/mack.jpg"
import iPhonegold from "../../Assets/Image/iPhonegold.jpg"
import iSpace from "../../Assets/Image/iSpace.jpg"
const Slide = ()=>{
  return (
    <Carousel>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={airpods}
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Applewatch}
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={iPhone14}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Mackbook}
          alt="fourth slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={mackbook2}
          alt="fifth slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={iPad}
          alt="fifth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Aeno}
          alt="fifth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={mack}
          alt="fifth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={iPhonegold}
          alt="fifth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={iSpace}
          alt="fifth slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slide















// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, EffectFade } from "swiper";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/effect-fade";

// import {slider} from "../../Data/data"
// import "./style.scss"

// const Slide = () => {
//   return (
//     <>
//       <section>
//       <Swiper
//       spaceBetween={50}
//       slidesPerView={1}
//       autoplay={true}
//       navigation={true}
//       modules={[Navigation, EffectFade]}
//       loop={true}
//       effect={"fade"}
//       >
      
//       {slider.map((item, index) => {
//             return (
//               <SwiperSlide>
//                <div className='slide-container'>
//                 <div className="description">
//                 <h1>{item.Title}</h1>
//                 <h1>{item.Title2}</h1>
//                 <p>{item.Period}</p>
//                 <h1>{item.Description}</h1>
//                 <h1>{item.Price}</h1>
//                 <h1>{item.expences}</h1>
                
//                 <div className='mack'>

//                   <div >
//                   <h1>{item.Time}</h1>
//                   <h1 >{item.indikiqiymet}</h1>
//                   <div className="lineV"></div>
//                   </div>
//                  <div className="discount">
//                   <h1>{item.Discount}</h1>
//                   <h1>{item.Discounted}</h1>
//                  </div>
                 
//                 </div>
//                 <button>Indi alın</button>
//                 </div>
                 
//                 <img src={item.img} alt="" />
//               </div>
//         </SwiperSlide>
//             );
//           })}
//       </Swiper>
          
       
//       </section>
//     </>
//   );
 
// };



// export default Slide