export default function Form({children,...rest}){
    return (
        <form action="#" method="" {...rest}>
            {children}
        </form>
    );
}