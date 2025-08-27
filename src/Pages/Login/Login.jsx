import React, { useState } from 'react';
import './Login.css';
import logo from '../../assets/logo.png'
import { login,signup } from '../../firebase';
import netflix_spinner from '../../assets/netflix_spinner.gif'

const Login = () => {

const [Signstate,setSignState] = useState("Sign In");
const[name,setName] = useState("");
const[email,setEmail] = useState("");
const[password,setpassword] = useState("");
const[loading,setloading] = useState(false);


const user_auth = async (event)=>{
  event.preventDefault();
  setloading(true);
  if(Signstate === "Sign In"){
    await login(email,password);
  }
  else{
    await signup(name,email,password);
  }
  setloading(false);
}


  return (
    loading?<div className="login-spinner">
      <img src={netflix_spinner} alt="" />
    </div>:
    <div className='Login'>
     <img src={logo} alt="" className='login-logo'/>
     <div className="login-form">
      <h1>{Signstate}</h1>
      <form>
        {Signstate === 'Sign Up'?

        <input value={name} onChange={(e) =>{setName(e.target.value)}}
        type="text" placeholder='Your name' />:<></>}
       
        <input value={email} onChange={(e) =>{setEmail(e.target.value)}}
         type="email" placeholder='Email' /><br />

        <input value={password} onChange={(e) =>{setpassword(e.target.value)}}
         type="password" placeholder='Password' /><br />

        <button onClick = {user_auth} type='submit'>{Signstate}</button>
        <div className="from-help">
          <div className="remember">
            <input type="checkbox"/>
            <label htmlFor="">Remember Me</label>
          </div>
          <p>Need Help?</p>
        </div>
      </form>
      <div className="form-switch">
        {Signstate === 'Sign In'?
        <p>New to Netflix? <span onClick={() => {setSignState("Sign Up")}}>Sign Up Now</span></p>:<p>Already have account? 
          <span onClick={() => {setSignState("Sign In")}}>Sign In Now</span></p>}
      </div>
     </div>
    </div>
  );
}

export default Login;
