export default function Button({type,children,...rest}){
    return <button type={type} {...rest}>{children}</button>
}