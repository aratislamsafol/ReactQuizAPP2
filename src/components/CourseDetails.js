import CourseDetailsInto from "./CourseDetailsInto";
import Href from "./Href";

export default function CourseDetails({courseDetails,children}){
    return <div className={courseDetails}>
        <h3 class="text-uppercase">Courses</h3>
        <CourseDetailsInto couresDetailsInto="couresDetailsInto"/>
        <Href src="/allCourse" className="text-uppercase allCourse">View All Courses</Href>
    </div>
}