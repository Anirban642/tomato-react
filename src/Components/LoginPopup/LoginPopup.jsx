import React, { useContext, useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'



const LoginPopup = ({setShowLogin}) => {

    const [currState,setCurrState] = useState("Login")
  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
            {currState==="Login"?<></>:<input type="text" name='name' placeholder='Your Name' required />}
            <input name='email' type="email" placeholder='Your Email' required />
            <input name='password' type="password" placeholder='Password' required />
        </div>
        <button type='submit'>{currState==="Sign Up"?"Create Account":"Login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By coninuing , I agree the terms and conditions of policy.</p>
        </div>
        {currState==="Login"
        ?<p>Create a New Account? <span onClick={()=>setCurrState("Sign Up")}>Click Here</span></p>:<p>Already have an Account? <span onClick={()=>setCurrState("Login")}>Login Here</span></p>}
      </form>
    </div>
  )
}

export default LoginPopup
