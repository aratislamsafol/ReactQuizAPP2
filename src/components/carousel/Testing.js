
import { AiFillStar } from 'react-icons/ai';
import CourseFee from '../CourseFee';
import { BsClockHistory } from 'react-icons/bs';
import img2 from '../assets/images/course14-573x403.jpg';
import Image from "../Image";
// Import Swiper React components
import 'bootstrap/dist/css//bootstrap.min.css';
import React from 'react';
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import { Swiper, SwiperSlide } from 'swiper/react';
import carouselCss from '../assets/css/module/carousel.module.css';
import { Link } from 'react-router-dom';
import Href from '../Href';
import AllCourse from '../hooks/AllCourse';
export default function AllCourses(){
  const {course}=AllCourse();
  return (
    <div className='container py-4 px-4 justify-content-center'>
      <Swiper
        // install Swiper modules
        freeMode={true}
        modules={[FreeMode]}
        spaceBetween={50}
        slidesPerView={3}
        grabCursor={true}
        className="mySwiper"
        breakpoints={
          {
            0:{
              slidesPerView:1,
              spaceBetween:10
            },
            480:{
              slidesPerView:1,
              spaceBetween:10
            },
            768:{
              slidesPerView:2,
              spaceBetween:15
            },
            1024:{
              slidesPerView:3,
              spaceBetween:15
            },
            1280:{
              slidesPerView:3,
              spaceBetween:20
            }
          }
        }
      >
        {course.map((crs,index)=>(
          <SwiperSlide>
          <div className={carouselCss.showCourses}>
              <Image src={`http://img.youtube.com/vi/${crs.youtubeID}/maxresdefault.jpg`} banner_img="img-fluid rounded" alt="items"/>
              <div className={carouselCss.courseFee}>
                  <h3>Free</h3>
                  <Href src={`/quiz/${crs.youtubeID}`}>{crs.title}</Href>    
                  <span>Basic |</span>
                  <span>Questions:20</span>
                  <div class="time d-flex justify-content-between">
                      <div class="d-flex gap-1">
                          <BsClockHistory class="bsClock"/>
                          <span class="">03:15</span>
                      </div>
                      <div className={carouselCss.courseRating}>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                      </div>
                  </div>  
              </div>
          </div>  
        </SwiperSlide>
        ))}
        
        ...
      </Swiper>
    </div>
  );
}


