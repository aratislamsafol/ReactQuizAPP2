import classes from '../assets/css/module/Success/result.module.css';
export default function Mark(){
    return (
        <div class={classes.mark}>
            <h1>Great , Bravo! </h1>
            <h2>You Get <span class={classes.getMark}>90</span> Marks</h2>
        </div>
    );
}