
import { Link } from 'react-router-dom';
import AllCourseList from './AllCourseList';
import banner from './assets/images/fullscreen-slider.jpg';
import Banner from './Banner';
import Button from './Button';
import AllCourses from './carousel/Testing';
import UpComingCourses from './carousel/UpComingCourse';
import Contact from './Contact';
import Container from './Container';
import Content from './Content';
import CourseDetails from './CourseDetails';
import Courses from './Courses';
import Footer from './Footer';
import Form from './Form';
import Header from './Header';
import Image from './Image';
import Input from './Input';
import MajorChoice from './MajorChoice';
import Navbars from './Navbar';
import SignInUp from './SignInUp';
import WorksWith from './WorksWith';

export default function Index(){
    
    return (
        <>
            <Header>
                <Image src={banner} banner_img="banner_img" />
                <Navbars />
                <Banner banner="banner">
                    <SignInUp signInUp="text-center signInUp">
                        <Link to="/login">Login </Link>
                        <Link to="/reg/">SignUp </Link>
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
                <AllCourses />
            </Container>   
            <MajorChoice majorChoice="majorChoice text-center"/>        
            <Container>
                <UpComingCourses />
            </Container>
            <Contact/>
            <Footer/>
        </>
    );
    
}

