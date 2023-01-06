import MajorChoiceItem from "./MajorChoiceItem";

export default function MajorChoiceIcon({majorChoiceIcon,children}){
    return <div className={majorChoiceIcon}>
        <MajorChoiceItem majorChoiceItems="majorChoiceItems"/>
    </div>
}