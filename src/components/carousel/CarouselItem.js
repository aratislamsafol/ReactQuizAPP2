import Image from "../Image";
import itemImage from "../assets/images/course14-573x403.jpg";
import CourseFee from "./CourseFee";

export default function CarouselItem({items,children}){
    return <div className="items">
        <Image src={itemImage} alt="carousel_Item"></Image>
        <CourseFee courseFee="courseFee mt-3"></CourseFee>
    </div>
}