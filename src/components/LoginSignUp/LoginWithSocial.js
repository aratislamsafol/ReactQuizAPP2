import Button from "../Button";
import { BsTwitter } from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { useAuth } from "../../context/AuthContext";

export default function LoginWithSocial(){
    
    const {facebookLoginHandler,TwitterLoginHandler}=useAuth();
    return <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
    <p class="lead fw-normal mb-0 me-3">Sign in with</p>
    <Button type="button" class="btn btn-primary btn-floating mx-1"  onClick={()=>facebookLoginHandler()}>
        <FaFacebookF/></Button>
    <Button type="button" class="btn btn-primary btn-floating mx-1" onClick={()=>TwitterLoginHandler()}>
        <BsTwitter/></Button>
    <Button type="button" class="btn btn-primary btn-floating mx-1">
        <FaLinkedinIn/></Button>
</div>
}