import classes from './assets/css/module/major.module.css';
import MajorChoiceItem from './MajorChoiceItem';
export default function MajorChoiceIcon({children,majorChoiceIcon}){
    return <div className={majorChoiceIcon}>
        <MajorChoiceItem majorChoiceItems={classes.majorChoiceItems}>{children}</MajorChoiceItem>
    </div>
}