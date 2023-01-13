import { BsFillPlayCircleFill } from 'react-icons/bs';
import { Link } from "react-router-dom";
import classes from '../assets/css/module/Quiz/miniPlayer.module.css';

export default function MiniPlayer(){
    return (
        <>
            <Link to="" class={classes.miniplayer}>
                <BsFillPlayCircleFill class={classes.playerIcon}/>
            </Link>
        </>
    );
}