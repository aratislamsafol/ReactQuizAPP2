import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import classes from '../assets/css/module/AllCourses/courseItem.module.css';
import CourseFee from "../CourseFee";
import AllCourse from '../hooks/AllCourse';
import Image from "../Image";

export default function CourseItem(){
    // const [page,setPage]=useState(1);
    const {loading,error,course}=AllCourse();
    return (
        <div className={classes.items}>
            {course.length>0 && (
                //  <InfiniteScroll dataLength={course.length} loader="Loading..." hasMore={hasMore} next={()=>setPage(page+7)}>
                <>
                    {course.map((c,index)=>( 
                        // <div className="infinite-scroll-component" key={index}>
                            <div className={`${classes.item}`} key={index}>
                                <Image src={`http://img.youtube.com/vi/${c.youtubeID}/maxresdefault.jpg`} banner_img="img-fluid" style={{width:'100'}} alt={c.title}/>
                                <CourseFee title={c.title} noq={c.noq} id={c.youtubeID}/>
                            </div>
                        // </div>
                        
                    ))} 
                </>
                    
                //  {/* </InfiniteScroll> */}
            )}
            {!loading && course.length === 0 && (
            <div className=''>
                No Data Found
            </div>)}
            {error && <div>Error Occured</div>}
            {loading && <div>Loading ...</div>}
            
        </div>
    );  
}