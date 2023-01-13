import { Link } from "react-router-dom";
import classes from '../assets/css/module/Login/login.module.css';
import loginImage from '../assets/images/Login/draw2.webp';
import Button from "../Button";
import Form from "../Form";
import Image from "../Image";
import Input from "./Input";
import LoginWithSocial from './LoginWithSocial';
import InputItem from './InputItem';
import CheckBox from '../CheckBox';
export default function LoginBody(){
    return (
      <section class="vh-100 mt-5 pt-5">
        <div class={`container-fluid ${classes.h_custom}`}>
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-md-9 col-lg-6 col-xl-5">
                <Image src={loginImage} banner_img="img-fluid" alt="Sample image"/>
            </div>
            <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <Form>
                <LoginWithSocial/>
                <div class="divider d-flex align-items-center my-4">
                  <p class="text-center fw-bold mx-3 mb-0">Or</p>
                </div>
      
                <InputItem type="email" title="Your Email" labelClass="form-label"/>

                <InputItem type="password" title="password" labelClass="form-label"/>
      
                <div class="d-flex justify-content-between align-items-center">
                  <CheckBox type="checkbox" title="Remember me" labelClass="form-label" value=""/>
            
                  <Link to="#!" class="text-body">Forgot password?</Link>
                </div>
                
                <div class="text-center text-lg-start">
                  <Button type="button" class="btn btn-primary btn-lg"
                    >Login</Button>
                  <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to="#!"
                      class="link-danger">Register</Link></p>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </section>
    );
    
}