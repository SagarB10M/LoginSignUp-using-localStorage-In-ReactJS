import React, { useState, useRef, useEffect } from 'react';
import Home from './Home';
import './LoginForm.css';
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaEnvelope } from "react-icons/fa";

export const LoginForm = () => {

  const name = useRef();
  const email = useRef();
  const password = useRef();
  const [showHome, setShowHome] = useState(false);
  const [show, setShow] = useState(true); 

  useEffect(() => {
    const localSignUp = localStorage.getItem("signUp");
    if (localSignUp) {
      setShowHome(true);
    }
  }, []); 

  const handleClick = (e) => {
    e.preventDefault();
    if (name.current.value && email.current.value && password.current.value) {
      localStorage.setItem("name", name.current.value);
      localStorage.setItem("email", email.current.value);
      localStorage.setItem("password", password.current.value);
      localStorage.setItem("signUp", email.current.value);
      alert("Account created successfully!!");
      window.location.reload();
    }
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    const localEmail = localStorage.getItem("email");
    const localPassword = localStorage.getItem("password");
    if (email.current.value === localEmail && password.current.value === localPassword) {
      localStorage.setItem("signUp", email.current.value);
      window.location.reload();
    } else {
      alert("Please enter valid credentials!");
    }
  };

  const [action, setAction] = useState('');
  const registerLink = () => {
    setAction('active');
    setShow(false);
  };

  const loginLink = () => {
    setAction('');
    setShow(true);
  };

  return (
    <div>
      {showHome ? <Home /> :
        <div className={`wrapper ${action}`}>
          {show ? (
            <div className="form-box login">
              <form>
                <h1>Login</h1>
                <div className='input-box'>
                  <input type="text" placeholder='Email' required ref={email} />
                  <FaEnvelope className='icon' />
                </div>
                <div className='input-box'>
                  <input type="password" placeholder='Password' required ref={password} />
                  <RiLockPasswordFill className='icon' />
                </div>
                <div className="remember-forgot">
                  <label><input type="checkbox" />Remember me</label>
                  <a href="#">Forgot password?</a>
                </div>
                <button onClick={handleSignIn}>Login</button>
                <div className="register-link">
                  <p>Don't have an account?<a href="#" onClick={registerLink}>Register</a></p>
                </div>
              </form>
            </div>
          ) : (
            <div className="form-box register">
              <form>
                <h1>SignUp</h1>
                <div className='input-box'>
                  <input type="text" placeholder='Username' required ref={name} />
                  <FaUser className='icon' />
                </div>
                <div className='input-box'>
                  <input type="email" placeholder='Email' required ref={email} />
                  <FaEnvelope className='icon' />
                </div>
                <div className='input-box'>
                  <input type="password" placeholder='Password' required ref={password} />
                  <RiLockPasswordFill className='icon' />
                </div>
                <div className="remember-forgot">
                  <label><input type="checkbox" />I agree to the terms & conditions</label>
                </div>
                <button onClick={handleClick} type="submit">SIGN UP</button>
                <div className="register-link">
                  <p>Already have an account?<a href="#" onClick={loginLink}>Login</a></p>
                </div>
              </form>
            </div>
          )}
        </div>
      }
    </div>
  );
};

export default LoginForm;
