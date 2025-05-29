import React from 'react'
import"../style/login.css"

export const Login = () => {
  return (
    <div id='container'>
        
<div id='login'>
    
    <h1>Login Form</h1>
    <img src="src/assets/img/person_24dp_0000F5_FILL0_wght400_GRAD0_opsz24.svg" alt="" />
    <input type="text" placeholder='User Name' /><br />
    <img src="src/assets/img/password_24dp_0000F5_FILL0_wght400_GRAD0_opsz24.svg" alt="" />
    <input type="text" placeholder='PassWord' /><br />
    <a href="">Forgot PassWord ?</a>
    <div id='but'>
        
        <img src="src/assets/img/login_24dp_0000F5_FILL0_wght400_GRAD0_opsz24.svg" alt="" />
        <button>Login</button>
    </div>
    <div id='social'>
        <h4>Social Media</h4>
        <a href=""><img src="src/assets/img/download (1).jpg" alt="" /></a>
        <a href=""><img src="src/assets/img/download (1).png" alt="" /></a>
        <a href=""><img src="src/assets/img/download.png" alt="" /></a>
    </div>
    

</div>
    </div>
)}