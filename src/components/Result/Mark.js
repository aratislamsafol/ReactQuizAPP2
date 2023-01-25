import classes from '../assets/css/module/Success/result.module.css';
export default function Mark({score,answer}){
    return (
        <div class={classes.mark}>
            <h1>Great , Bravo! </h1>
            <h2>You Get <span class={classes.getMark}>{score}</span> Marks From <span class={classes.getMark}>{answer*5}</span> Marks </h2>
        </div>
    );
}