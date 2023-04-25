import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


// import required modules
import { Navigation } from "swiper";

export const Testimonials = ({ setCollapsed, theme, onUpdateTheme }) => {


  return (


    
<div className='testimonial'>
      <div className="testimonial-wrapper">
        
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
       
        <SwiperSlide>
            Couldn’t ask for a better atmosphere of family, friends and fun.<br/>  You can just sit around and enjoy the history and the memories the resort has created for many people.<br/>  Everyone has a great story at Dalens and the story gets to continue year after year.<br/><br/>
            - Dan Kostopoulos
        </SwiperSlide>


        <SwiperSlide>
            Our first time here and we can't wait to come back! <br/> Everyone's super friendly and helpful and make you feel like family.<br/> <br/> 
            - Kelly Wilber
        </SwiperSlide>

     
        <SwiperSlide>
            The best place to come unwind and enjoy nature! <br/>
            We love it here and wouldn’t want to stay anywhere else.<br/><br/>
            - Anthony Ray
        </SwiperSlide>
      </Swiper>

      </div>
   
      </div>



  )
}