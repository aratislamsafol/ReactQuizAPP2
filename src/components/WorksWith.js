import Href from "./Href";
import { AiFillAlert } from "react-icons/ai";
import { RiPsychotherapyFill } from "react-icons/ri";
import { HiUserGroup } from "react-icons/hi";
import { MdDraw } from "react-icons/md";

export default function WorksWith({children,worksWith}){
    return <div className={worksWith}>
        <Href><AiFillAlert className="worksWithIcon"/>
        </Href>
        <Href><RiPsychotherapyFill className="worksWithIcon"/>
        </Href>
        <Href><HiUserGroup className="worksWithIcon"/>
        </Href>
        <Href><MdDraw className="worksWithIcon"/>
        </Href>
    </div>
}