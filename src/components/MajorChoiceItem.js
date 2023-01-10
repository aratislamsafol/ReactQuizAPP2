import { TbBrandPhp } from 'react-icons/tb';
import { SiCss3 } from 'react-icons/si';
import { DiJavascript1 } from 'react-icons/di';
import { FaReact } from 'react-icons/fa';
import { FaVuejs } from 'react-icons/fa';
import icon from './assets/css/module/major.module.css';

export default function MajorChoiceItem({majorChoiceItems}){
    return <div className={majorChoiceItems}>
                <TbBrandPhp className={icon.icon}/>
                <SiCss3 className={icon.icon}/>
                <DiJavascript1 className={icon.icon}/>
                <FaReact className={icon.icon}/>
                <FaVuejs className={icon.icon}/>
    </div>
}