import { Link } from 'react-router-dom';
import classes from './assets/css/module/footer.module.css'; 
export default function FooterPartition(){
    return <div className={classes.footerItems}>
       <div className='about'>
            <h5>About us</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et lobortis diam.

            Duis tellus enim, vestibulum eget varius id, vulputate et mi. Nullam feugiat, diam quis interdum varius</p>

            <Link to='' className={classes.strt_link}>START LEARNING NOW</Link>
       </div>

       

       <div className={classes.popularCourse}>
            <h5>Popular Courses</h5>
            <div class='border-bottom'>
                <Link to="" className={classes.PCLink}>Advanced Programming</Link>
                <p>$40</p>
            </div>
            <div class='border-bottom'>
                <Link to="" className={classes.PCLink}>Advanced Programming</Link>
                <p>$Free</p>
            </div>
            <div class='border-bottom'>
                <Link to="" className={classes.PCLink}>Advanced Programming</Link>
                <p>Free</p>
            </div>
       </div>

       <div className={classes.quickLinks}>
            <h5>Quick Links</h5>
            <div class='border-bottom'>
                <Link to="" className={classes.PCLink}>Advanced Programming</Link>
                <p>$40</p>
            </div>
            <div class='border-bottom'>
                <Link to="" className={classes.PCLink}>Advanced Programming</Link>
                <p>$Free</p>
            </div>
            <div class='border-bottom'>
                <Link to="" className={classes.PCLink}>Advanced Programming</Link>
                <p>Free</p>
            </div>
       </div>

       <div className={classes.contact}>
            <h5>Contact us</h5>
            <div class='border-bottom'>
                <p>The Design Themes , Dhaka, Bangladesh.</p>
            </div>
            <div class='border-bottom my-2'>
                <Link to="" className={classes.PCLink}>+880 1969545000</Link>
            </div>
            <div class='border-bottom my-2'>
                <Link to="" className={classes.PCLink}>+880 1969545000</Link>
            </div>
            <div class='border-bottom my-2'>
                <Link to="" className={classes.PCLink}>aratislamsafol@gmail.com</Link>
            </div>
       </div>
       
    </div>
}