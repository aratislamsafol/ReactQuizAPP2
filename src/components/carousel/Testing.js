import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Fragment } from "react";
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';
export default function Testing(){
    return (
        <Fragment>
             <OwlCarousel className='owl-theme' loop margin={10} nav>
                    <div className="upComingItems">
                        <img src="assets/images/course14-573x403.jpg" alt="carousel_Item" />
                        <div className="courseFee mt-3">
                            <h3>Free</h3>
                            <Link to="">Introduction to Calculus</Link>    
                            <span>Basic |</span>
                            <span>Questions:20</span>
                            <div className="time d-flex justify-content-between">
                            <div className="d-flex gap-1">
                                <span className="material-symbols-outlined ">
                                schedule
                                </span>
                                <span className>03:15</span>
                            </div>
                            <div className="courseRating">
                                <span className="material-symbols-outlined">
                                star
                                </span>
                                <span className="material-symbols-outlined">
                                star
                                </span>
                                <span className="material-symbols-outlined">
                                star
                                </span>
                                <span className="material-symbols-outlined">
                                star
                                </span>
                                <span className="material-symbols-outlined">
                                star
                                </span>
                            </div>
                            </div>  
                        </div>
                    </div>
                    <div className="upComingItems">
                        <img src="assets/images/course14-573x403.jpg" alt="carousel_Item" />
                        <div className="courseFee mt-3">
                            <h3>Free</h3>
                            <Link to="">Introduction to Calculus</Link>  
                            <span>Basic |</span>
                            <span>Questions:20</span>
                            <div className="time d-flex justify-content-between">
                            <div className="d-flex gap-1">
                                <span className="material-symbols-outlined ">
                                schedule
                                </span>
                                <span className>03:15</span>
                            </div>
                            <div className="courseRating">
                                <span className="material-symbols-outlined">
                                star
                                </span>
                                <span className="material-symbols-outlined">
                                star
                                </span>
                                <span className="material-symbols-outlined">
                                star
                                </span>
                                <span className="material-symbols-outlined">
                                star
                                </span>
                                <span className="material-symbols-outlined">
                                star
                                </span>
                            </div>
                            </div>  
                        </div>
                    </div>
                    <div className="upComingItems">
                        <img src="assets/images/course14-573x403.jpg" alt="carousel_Item" />
                        <div className="courseFee mt-3">
                            <h3>Free</h3>
                            <Link to="">Introduction to Calculus</Link>    
                            <span>Basic |</span>
                            <span>Questions:20</span>
                            <div className="time d-flex justify-content-between">
                            <div className="d-flex gap-1">
                                <span className="material-symbols-outlined ">
                                schedule
                                </span>
                                <span className>03:15</span>
                            </div>
                            <div className="courseRating">
                                <span className="material-symbols-outlined">
                                star
                                </span>
                                <span className="material-symbols-outlined">
                                star
                                </span>
                                <span className="material-symbols-outlined">
                                star
                                </span>
                                <span className="material-symbols-outlined">
                                star
                                </span>
                                <span className="material-symbols-outlined">
                                star
                                </span>
                            </div>
                            </div>  
                        </div>
                    </div>
                    <div className="upComingItems">
                        <img src="assets/images/course14-573x403.jpg" alt="carousel_Item" />
                        <div className="courseFee mt-3">
                            <h3>Free</h3>
                            <Link to="">Introduction to Calculus</Link>  
                            <span>Basic |</span>
                            <span>Questions:20</span>
                            <div className="time d-flex justify-content-between">
                            <div className="d-flex gap-1">
                                <span className="material-symbols-outlined ">
                                schedule
                                </span>
                                <span className>03:15</span>
                            </div>
                            <div className="courseRating">
                                <span className="material-symbols-outlined">
                                star
                                </span>
                                <span className="material-symbols-outlined">
                                star
                                </span>
                                <span className="material-symbols-outlined">
                                star
                                </span>
                                <span className="material-symbols-outlined">
                                star
                                </span>
                                <span className="material-symbols-outlined">
                                star
                                </span>
                            </div>
                            </div>  
                        </div>
                    </div>
                    <div className="courseItems">
                    <img src="assets/images/course14-573x403.jpg" alt="carousel_Item" />
                    <div className="courseFee mt-3">
                        <h3>Free</h3>
                        <Link to="">Introduction to Calculus</Link>  
                        <span>Basic |</span>
                        <span>Questions:20</span>
                        <div className="time d-flex justify-content-between">
                        <div className="d-flex gap-1">
                            <span className="material-symbols-outlined ">
                            schedule
                            </span>
                            <span className>03:15</span>
                        </div>
                        <div className="courseRating">
                            <span className="material-symbols-outlined">
                            star
                            </span>
                            <span className="material-symbols-outlined">
                            star
                            </span>
                            <span className="material-symbols-outlined">
                            star
                            </span>
                            <span className="material-symbols-outlined">
                            star
                            </span>
                            <span className="material-symbols-outlined">
                            star
                            </span>
                        </div>
                        </div>  
                    </div>
                    </div>
                </OwlCarousel>;

        </Fragment>
    );
}