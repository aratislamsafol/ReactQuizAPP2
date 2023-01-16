import classes from '../assets/css/module/Login/login.module.css';
import loginImage from '../assets/images/Login/draw2.webp';
import Image from "../Image";
import Input from "./Input";
import SignInForm from "./SignInForm";
export default function LoginBody(){
    return (
      <section class="vh-100 mt-5 pt-5">
        <div class={`container-fluid ${classes.h_custom}`}>
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-md-9 col-lg-6 col-xl-5">
                <Image src={loginImage} banner_img="img-fluid" alt="Sample image"/>
            </div>
            <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <SignInForm/>
            </div>
          </div>
        </div>
      </section>
    );
    
}