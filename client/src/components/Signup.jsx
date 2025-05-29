import React from 'react'
import "../style/Signup.css"
const Signup = () => {
  return (
    
      <div id="container" style={{position:"relative"}}>
      <h1 style={{textAlign:"center"}}>Sign Up</h1>
      <p style={{textAlign:"center"}}>Please fill in this form to create an account.</p>
       <hr />

      <label for=""><b>Email</b></label><br />
      <input type="text" placeholder="abc1@gmail.com" required/><br />

      <label for=""><b>Password</b></label><br />
      <input type="password" placeholder="******" required/><br />

      <label for=""><b>Repeat Password</b></label><br />
      <input type="password" placeholder="******"  required/><br />


      <a href="#" style={{position:"relative"}} id='FP'>Forgot Password</a>

        <p style={{textAlign:"center"}}>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
<br />
        <button id='B1'>Cancel</button><button type="submit" id='B2'>SIGNUP</button>
    </div>
    
   
  )
}

export default Signup
