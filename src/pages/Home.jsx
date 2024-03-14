import React, { useState } from 'react'
import classes from '../styles/Home.module.css'
import { Link } from 'react-router-dom'
import '../styles/TwitterLoginPage.css';
import logo2 from '../assets/logo2.png'


function Home(props) {
  
  return(
    <div className="container">
    <div className="logo-container">
      <img src={logo2} alt="Twitter Logo" className="logo" />
    </div>
    <div className="content">
      <h2 className="welcome-text">Login to Twitter</h2>
      <div className="login-form">
        <input type="text" placeholder="Phone number,email address" className="input" />
        <input type="password" placeholder="Password" className="input" />
        <button className="login-button">Log in</button>
      </div>
      <div className="footer">
        <a href="#" className="forgot-password">Forgot password?</a>
        <button className="sign-up">Sign up for Twitter</button>
      </div>
    </div>
  </div>
  )
    
}

export default Home; 