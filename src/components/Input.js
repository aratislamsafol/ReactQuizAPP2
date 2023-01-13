export default function Input({type,placeholder,...rest}){
    return <input type={type} placeholder={placeholder} {...rest} />
}