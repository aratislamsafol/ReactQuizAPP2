
import { AiFillStar } from 'react-icons/ai';
import { BsClockHistory } from 'react-icons/bs';
import carouselCss from './assets/css/module/carousel.module.css';
export default function CourseFee(){
    return <div className={carouselCss.courseFee}>
    <h3>Free</h3>
    <a href="">Introduction to Calculus</a>    
    <span>Basic |</span>
    <span>Questions:20</span>
    <div className="time d-flex justify-content-between">
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
}