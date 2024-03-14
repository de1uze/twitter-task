import React from 'react'
import classes from '../styles/Login.module.css'
import styles from '../styles/Styles.module.css'
import logo from '../assets/logo.png'
import logo2 from '../assets/logo2.png'
import google from '../assets/google.png'
import apple from '../assets/apple.png'
import { Link, NavLink} from 'react-router-dom'

function Login(props) {

  const buttonStyles = `${classes.button} ${styles.button}`
  const secondButtonStyles = `${classes.button} ${styles.secondButton}`
  const imageStyles = {
    width: '50px',      
    height: '50px',     
  
   };
   const rootStyle = {
    backgroundColor: 'white', 
    minHeight: '100vh' ,
    color:'black',
  
  };
  const buttonStyle = {
    border: '1px solid lightgray', 

    
 
  };
  return (
    <>
    <div className={classes.loginContainer} style={rootStyle}>
      <div  className={classes.logoContainer}>
        <img className={classes.logo} src={logo} alt="" />
        
      </div>
     
      <div>
      <img className="logo2" id="logo2" src={logo2}style={imageStyles} />
        <h1>Happening now</h1>
        <h3>Join Twitter today.</h3>
        
      
        <div className={classes.registerContainer}>
          <button className={classes.signUp} style={buttonStyle}>
            <img className={classes.signUpLogo} src={google} alt="" />
            Sign up with Google
          </button>
          <button className={classes.signUp} style={buttonStyle}>
            <img className={classes.signUpLogo} src={apple} alt="" />
            Sign up with Apple 
          </button>
          <button className={classes.signUp} style={buttonStyle} >
            
            Sign up with Phone or Mail 
          </button>
          {/*  */}
          <p className={classes.terms}>
            By signing up, you agree to the <NavLink className={styles.link}>Terms of Service</NavLink> and <NavLink className={styles.link}>Privacy Policy</NavLink>, including <NavLink className={styles.link}>Cookie Use.</NavLink>
          </p>
          <br />
          <p>Already have an Account ? <Link to='/home'> Log in</Link></p>
        
        </div>
      </div>
    </div>
    <div className={classes.footerWrapper}>
      <footer className={classes.footer}>
        <NavLink className={classes.footerContent}>About Help Center Terms of Service </NavLink>
        <NavLink className={classes.footerContent}>Privacy Policy Cookie Policy Ads info</NavLink>
        <NavLink className={classes.footerContent}>Blog Status Carrres Brand Resources</NavLink>
        <NavLink className={classes.footerContent}>Advertsing Marketing Twitter for Business Developers Directory Settings</NavLink>
        <p className={classes.footerContent}>© 2023 Anascreaction.</p>
      </footer>
    </div>
    </>
  )
}

export default Login