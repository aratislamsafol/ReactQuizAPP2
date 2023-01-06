import CourseItemsSm from "./CourseItemsSm";

export default function AllCourseList(){
    return (
        <div class="row">
            <CourseItemsSm column="col-12 col-md-3 col-xl-3" courseCount="332" topicsName="Course"/>
            <CourseItemsSm column="col-12 col-md-3 col-xl-3" courseCount="1400" topicsName="Members" />
            <CourseItemsSm column="col-12 col-md-3 col-xl-3" courseCount="44" topicsName="Authors"/>                   
            <CourseItemsSm column="col-12 col-md-3 col-xl-3" courseCount="2560" topicsName="Subject" />
        </div>
    );
}