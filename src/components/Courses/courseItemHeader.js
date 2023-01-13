import Container from "../Container";
import CourseItem from "./CoureseItem";

export default function CourseItemHeader(){
    return <Container classes="container mt-5 pt-5">
        <div class="border-bottom">
            <h3 class="mb-3 mt-3">All Courses</h3>
        </div>
        <CourseItem/>
    </Container>
}