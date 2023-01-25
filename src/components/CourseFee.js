
import { AiFillStar } from 'react-icons/ai';
import { BsClockHistory } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import carouselCss from './assets/css/module/carousel.module.css';
export default function CourseFee({title,noq,id}){
    return <div className={carouselCss.courseFee}>
    <h3>Free</h3>
    {noq>0?<Link to={`/quiz/${id}`}>{title}</Link>:<p>{title}</p>}
    <span>Basic |</span>
    <span>{noq}</span>
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