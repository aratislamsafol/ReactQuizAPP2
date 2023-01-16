import Button from "../Button";
import Form from "../Form";
import Input from "./Input";
import InputItem from './InputItem';
import CheckBox from '../CheckBox';
import LoginWithSocial from './LoginWithSocial';
import { Link } from "react-router-dom";
export default function SignInForm(){
    return (
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
    );
}