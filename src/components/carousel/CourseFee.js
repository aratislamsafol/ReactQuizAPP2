import Href from "../Href";
import CourseRating from "./CourseRating";
import Time from "./Time";

export default function CourseFee({courseFee}){
    return <div className={courseFee}>
        <h3>Free</h3>
        <Href src="">Introduction to Calculus</Href>
        <span>Basic |</span>
        <span>Questions:20</span>
        <Time time="time d-flex justify-content-between">
            <CourseRating courseRating="courseRating"/>
        </Time>
    </div>
}