import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Button from "../Button";
import CheckBox from '../CheckBox';
import Form from "../Form";
import InputItem from './InputItem';
import LoginWithSocial from './LoginWithSocial';
export default function SignInForm(){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState("");
    const [loading,setLoading]=useState();
    const [agree,setAgree]=useState();
    const {Login}=useAuth();
    // const {ResetPassword}=useAuth();
    const navigate=useNavigate();

    async function handeler(e){
        e.preventDefault();
        try{
            setError("");
            setLoading(true);
            await Login(email,password);
            navigate("/allCourse");
        }catch(err){
            setError("Password or Email Incorrect");
            setLoading(false);
            console.log(err);
        }
    }

    return (
        <Form onSubmit={handeler}>
            <LoginWithSocial/>
            <div class="divider d-flex align-items-center my-4">
            <p class="text-center fw-bold mx-3 mb-0">Or</p>
            </div>

            <InputItem type="email" title="Your Email" value={email} onChange={(e)=>setEmail(e.target.value)} labelClass="form-label"/>

            <InputItem type="password" title="password" value={password} onChange={(e)=>setPassword(e.target.value)} labelClass="form-label"/>

            <div class="d-flex justify-content-between align-items-center">
            <CheckBox type="checkbox" title="Remember me" value={agree} onChange={(e)=>setAgree(e.target.value)} labelClass="form-label"/>

            {/* <Button className="resetBtn" type="button" onClick={forgetPassword}>Forgot password?</Button> */}
            {/* <Link to="#!" class="text-body">Forgot password?</Link> */}
            </div> 
            
            <div class="text-center text-lg-start">
            <Button type="submit" disabled={loading} class="btn btn-primary btn-lg"
                >Login</Button>
            <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to="/reg"
                class="link-danger">Register</Link></p>
            </div>
            {error && <p className='error' style={{color:'white', backgroundColor:'#F08080',padding:'10px',borderRadius:'6px',marginTop:'10px'}}>{error}</p>}
        </Form>
    );
}