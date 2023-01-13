export default function ProgressBar({progress_bar,precent,...rest}){
    return (
        <div className={progress_bar} {...rest}>
            {precent}
        </div>
    );
}