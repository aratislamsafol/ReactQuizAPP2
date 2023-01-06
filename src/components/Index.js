
import { Link } from 'react-router-dom';
import AllCourseList from './AllCourseList';
import banner from './assets/images/fullscreen-slider.jpg';
import Banner from './Banner';
import Button from './Button';
import Container from './Container';
import Content from './Content';
import CourseDetails from './CourseDetails';
import Courses from './Courses';
import Form from './Form';
import Header from './Header';
import Image from './Image';
import Input from './Input';
import MajorChoice from './MajorChoice';
import Navbar from './Navbar';
import SignInUp from './SignInUp';
import UpComingEvent from './UpComingEvent';
import WorksWith from './WorksWith';
export default function Index(){
    return (
        <>
            <Header>
                <Image src={banner} banner_img="banner_img" />
                <Navbar />
                <Banner banner="banner">
                    <SignInUp signInUp="text-center signInUp">
                        <Link to="#">Login </Link>
                        <Link to="#">SignUp </Link>
                    </SignInUp>
                    
                    <Form>
                        <Input type="text" placeholder="Search Course" />
                        <Button type="submit"><span class="material-symbols-outlined ">
                            search
                            </span>
                        </Button>
                    </Form>
                    
                    <Content content="content">
                        <h4>We have the largest collection of courses </h4>
                        <a href="courses.html">View All Courses</a>
                    </Content>
                </Banner>
                <Courses courses="courses d-none d-md-block">
                    <Container>
                        <AllCourseList/>
                    </Container>
                </Courses>
            </Header>

            <Container classes="container text-center mt-3 mt-md-5">
                <Content content="contents">
                    <h5>We have the largest collection of courses </h5>
                    <Link to="">View All Courses</Link>
                </Content>

                <Courses courses="courses d-md-none">
                    <Container>
                        <AllCourseList/>
                    </Container>
                </Courses>

                <WorksWith worksWith="worksWith d-flex flex-column flex-md-row gap-3 justify-content-center text-center my-3" />
                <CourseDetails courseDetails="courseDetails"/>

                {/* Owl Carousel  */}
                <div class="owl-carousel mt-4">
                    <div class="upComingItems">
                        <img src="assets/images/course14-573x403.jpg" alt="carousel_Item" />
                        <div class="courseFee mt-3">
                            <h3>Free</h3>
                            <a href="">Introduction to Calculus</a>  
                            <span>Basic |</span>
                            <span>Questions:20</span>
                            <div class="time d-flex justify-content-between">
                                <div class="d-flex gap-1">
                                    <span class="material-symbols-outlined ">
                                        schedule
                                    </span>
                                    <span class="">03:15</span>
                                </div>
                                <div class="courseRating">
            
                                    <span class="material-symbols-outlined">
                                        star
                                        </span>
                                    <span class="material-symbols-outlined">
                                        star
                                    </span>
                                    <span class="material-symbols-outlined">
                                        star
                                    </span>
                                    <span class="material-symbols-outlined">
                                        star
                                    </span>
                                    <span class="material-symbols-outlined">
                                        star
                                    </span>
                                </div>
                            </div>  
                        </div>
                    </div>
                    <div class="upComingItems">
                        <img src="assets/images/course14-573x403.jpg" alt="carousel_Item" />
                        <div class="courseFee mt-3">
                            <h3>Free</h3>
                            <a href="">Introduction to Calculus</a>  
                            <span>Basic |</span>
                            <span>Questions:20</span>
                            <div class="time d-flex justify-content-between">
                                <div class="d-flex gap-1">
                                    <span class="material-symbols-outlined ">
                                        schedule
                                    </span>
                                    <span class="">03:15</span>
                                </div>
                                <div class="courseRating">
            
                                    <span class="material-symbols-outlined">
                                        star
                                        </span>
                                    <span class="material-symbols-outlined">
                                        star
                                    </span>
                                    <span class="material-symbols-outlined">
                                        star
                                    </span>
                                    <span class="material-symbols-outlined">
                                        star
                                    </span>
                                    <span class="material-symbols-outlined">
                                        star
                                    </span>
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>
                {/* Finished Owl Carousel */}
                {/* <OwlCarousel owlClassName="owl-carousel mt-4"/> */}
                {/* <MajorChoice majorChoice="majorChoice text-center"/> */}
                {/* <UpComingEvent/> */}
            </Container>           
        </>
    );
    
}

