import { Link } from "react-router-dom";
export default function Href({children,className,src}){
    return <Link to={src} className={className}>{children}</Link>
}