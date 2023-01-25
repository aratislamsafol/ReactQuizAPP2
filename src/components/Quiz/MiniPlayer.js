import { useContext, useRef, useState } from 'react';
import { BsFillPlayCircleFill } from 'react-icons/bs';
import { GrFormClose } from 'react-icons/gr';
import ReactPlayer from 'react-player/youtube';
import classes from '../assets/css/module/Quiz/miniPlayer.module.css';
import { context } from '../pages/Quiz';

export default function MiniPlayer(){
    const miniPlayerData = useContext(context);
    const [status,setStatus]=useState(false);
    const buttonRef=useRef(); 
        const videoUrl=`http://www.youtube.com/watch?v=${miniPlayerData.id}`;
    function togglePlayer(){
        if(!status){
            buttonRef.current.classList.remove(classes.floatingBtn);
            setStatus(true);
        }else{
            buttonRef.current.classList.add(classes.floatingBtn);
            setStatus(false);
        }
    }
    return <>
            {/* <div onClick={togglePlayer} ref={buttonRef} className={`${classes.miniPlayer} ${classes.floatingBtn}`}>
              <BsFillPlayCircleFill class={classes.playerIcon}/>
                <span className={classes.open}> pl </span>
                <span className={classes.close} onClick={togglePlayer}><GrFormClose/></span>
               <ReactPlayer className={classes.player} url={videoUrl} width="300px" height="168px" playing={status} controls/> */}
            {/* <p>{miniPlayerData.title}</p> */}
            {/* </div> */}

            <div className={`${classes.miniPlayer} ${classes.floatingBtn}`} ref={buttonRef} onClick={togglePlayer}>
                <span className={`${classes.open}`}>
                    <BsFillPlayCircleFill class={classes.playerIcon}/>
                </span>
                <span className={`${classes.close}`} onClick={togglePlayer}>
                    <GrFormClose className='mb-1' style={{fontSize:'20px',marginLeft:'2px'}} />
                </span>
                <ReactPlayer className={classes.player} url={videoUrl} width="300px" height="168px" playing={status} controls />
      {/* <p>{title}</p> */}
    </div>
        </>
}