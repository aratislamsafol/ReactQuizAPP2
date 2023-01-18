import classes from '../assets/css/module/AllCourses/courseItem.module.css';
import img from '../assets/images/blog14.jpg';
import CourseFee from "../CourseFee";
import Image from "../Image";
export default function CourseItem(){
    return  <div className={classes.items}>
                <div className={classes.item}>
                    <Image src={img} banner_img="img-fluid" style={{width:'100'}} alt=""/>
                    <CourseFee/>
                </div>
                <div className={classes.item}>
                    <Image src={img} banner_img="img-fluid" style={{width:'100'}} alt=""/>
                    <CourseFee/>
                </div>
                <div className={classes.item}>
                    <Image src={img} banner_img="img-fluid" style={{width:'100'}} alt=""/>
                    <CourseFee/>
                </div>
                <div className={classes.item}>
                    <Image src={img} banner_img="img-fluid" style={{width:'100'}} alt=""/>
                    <CourseFee/>
                </div>
                <div className={classes.item}>
                    <Image src={img} banner_img="img-fluid" style={{width:'100'}} alt=""/>
                    <CourseFee/>
                </div>
                <div className={classes.item}>
                    <Image src={img} banner_img="img-fluid" style={{width:'100'}} alt=""/>
                    <CourseFee/>
                </div>
        </div>
}