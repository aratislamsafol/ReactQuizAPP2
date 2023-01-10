
// Import Swiper React components
import 'bootstrap/dist/css//bootstrap.min.css';
import React from 'react';
import { FreeMode } from "swiper";
import img from '.././assets/images/course11-110x90.jpg';
import "swiper/css";
import "swiper/css/free-mode";
import { Swiper, SwiperSlide } from 'swiper/react';
import carouselCss from '../assets/css/module/carousel.module.css';
import Image from '../Image';
export default function UpComingCourses(){
  return (
    <div className='container py-4 px-4 justify-content-center text-center'>
      <h3 class="my-4 mb-5">UpComing Event</h3>
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
              slidesPerView:2,
              spaceBetween:15
            },
            1280:{
              slidesPerView:2,
              spaceBetween:20
            }
          }
        }
      >
        <SwiperSlide>
            <div class={carouselCss.upComingEvent}>
              <Image src={img} banner_img="img-fluid rounded" alt="upcoming_eventImage"/>
              {/* <Image src={img} class="img-fluid rounded" alt="" /> */}
              <div class={carouselCss.eventDetails}>
                  <h4>Welcoming 25 Bathc</h4>
                  <span>jun 2022 @ 8:00 am - Mar 2030 @10:00 am</span>
                  <p>Location Bangladesh</p>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div class={carouselCss.upComingEvent}>
              <Image src={img} banner_img="img-fluid rounded" alt="upcoming_eventImage"/>
              {/* <Image src={img} class="img-fluid rounded" alt="" /> */}
              <div class={carouselCss.eventDetails}>
                  <h4>Welcoming 25 Bathc</h4>
                  <span>jun 2022 @ 8:00 am - Mar 2030 @10:00 am</span>
                  <p>Location Bangladesh</p>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div class={carouselCss.upComingEvent}>
              <Image src={img} banner_img="img-fluid rounded" alt="upcoming_eventImage"/>
              {/* <Image src={img} class="img-fluid rounded" alt="" /> */}
              <div class={carouselCss.eventDetails}>
                  <h4>Welcoming 25 Bathc</h4>
                  <span>jun 2022 @ 8:00 am - Mar 2030 @10:00 am</span>
                  <p>Location Bangladesh</p>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div class={carouselCss.upComingEvent}>
              <Image src={img} banner_img="img-fluid rounded" alt="upcoming_eventImage"/>
              {/* <Image src={img} class="img-fluid rounded" alt="" /> */}
              <div class={carouselCss.eventDetails}>
                  <h4>Welcoming 25 Bathc</h4>
                  <span>jun 2022 @ 8:00 am - Mar 2030 @10:00 am</span>
                  <p>Location Bangladesh</p>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div class={carouselCss.upComingEvent}>
              <Image src={img} banner_img="img-fluid rounded" alt="upcoming_eventImage"/>
              {/* <Image src={img} class="img-fluid rounded" alt="" /> */}
              <div class={carouselCss.eventDetails}>
                  <h4>Welcoming 25 Bathc</h4>
                  <span>jun 2022 @ 8:00 am - Mar 2030 @10:00 am</span>
                  <p>Location Bangladesh</p>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div class={carouselCss.upComingEvent}>
              <Image src={img} banner_img="img-fluid rounded" alt="upcoming_eventImage"/>
              {/* <Image src={img} class="img-fluid rounded" alt="" /> */}
              <div class={carouselCss.eventDetails}>
                  <h4>Welcoming 25 Bathc</h4>
                  <span>jun 2022 @ 8:00 am - Mar 2030 @10:00 am</span>
                  <p>Location Bangladesh</p>
              </div>
            </div>
        </SwiperSlide>
        ...
      </Swiper>
    </div>
  );
}


