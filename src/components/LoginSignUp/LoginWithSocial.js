import Button from "../Button";
import { BsTwitter } from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
export default function LoginWithSocial(){
    return <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
    <p class="lead fw-normal mb-0 me-3">Sign in with</p>
    <Button type="button" class="btn btn-primary btn-floating mx-1">
        <FaFacebookF/></Button>
    <Button type="button" class="btn btn-primary btn-floating mx-1">
        <BsTwitter/></Button>
    <Button type="button" class="btn btn-primary btn-floating mx-1">
        <FaLinkedinIn/></Button>
</div>
}