import majorChoiceImage from './assets/images/parallax-light.jpg';
import Image from "./Image";
import MajorChoiceIcon from "./MajorChoiceIcon";
export default function MajorChoice({majorChoice}){
    return <div className={majorChoice}>
        <Image src={majorChoiceImage} banner_img="img-fluid" alt="" />
        <MajorChoiceIcon majorChoiceIcon="majorChoiceIcon"/>
    </div>
}