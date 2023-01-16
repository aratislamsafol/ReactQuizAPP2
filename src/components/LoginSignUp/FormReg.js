import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Button from '../Button';
import CheckBox from '../CheckBox';
import Form from '../Form';
import InputItem from './InputItem';

export default function FormReg(){
    const [username,setUsername] =useState("");
    const [email,setEmail] =useState("");
    const [password,setPassword] =useState("");
    const [confirmPassword,setconfirmPassword] =useState("");
    const [agree,setAgree]=useState("");

    const [error,setError]=useState();
    const [loading,setLoading]=useState();

    const {Signup}=useAuth();
    const Navigate=useNavigate();

    async function handleSubmit(e){
        e.preventDefault();

        if(password !== confirmPassword){
            return setError("Password Don't Matched");
        }

        try{
            setError("");
            setLoading(true);
            await Signup(email,password,username);
            Navigate("/");
        }catch(err){
            console.log(err);
            setLoading(false);
            setError("Failed to create or loading");
        }
    }


    return (
        <Form class="mx-1 mx-md-4" onSubmit={handleSubmit} >
            <InputItem type="text" title="Your Name" labelClass="form-label" value={username} onChange={(e)=>setUsername(e.target.value)} required />

            <InputItem type="email" title="Your Email" labelClass="form-label" value={email} onChange={(e)=>setEmail(e.target.value)} required/>

            <InputItem type="password" title="password" labelClass="form-label" value={password} onChange={(e)=>setPassword(e.target.value)} required/>

            <InputItem type="password" title="Repeat your password" labelClass="form-label" value={confirmPassword} onChange={(e)=>setconfirmPassword(e.target.value)} required />

            <CheckBox type="checkbox" title="I agree all statements in " value={agree} labelClass="form-label" onChange={(e)=>setAgree(e.target.checked)} required />

            <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                <Button type="submit" disabled={loading} class="btn btn-primary btn-lg">Register</Button>
            </div>
            {error && <p className='error' style={{color:'white', backgroundColor:'#F08080',padding:'10px',borderRadius:'6px',marginTop:'10px'}}>{error}</p>}
        </Form>
    );
}