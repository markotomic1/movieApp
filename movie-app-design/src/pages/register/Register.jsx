import { useRef } from "react";
import { useState } from "react";
import "./register.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Register = () => {
  const [email, setEmail] = useState("");
  const emailRef = useRef();
  const [password, setPassword] = useState("");
  const passwordRef = useRef();
  const [username, setUsername] = useState("");
  const usernameRef = useRef();

  const navigate = useNavigate();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };
  const handleFinish = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8800/api/auth/register", {
        email,
        username,
        password,
      });

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='register'>
      <div className='top'>
        <div className='wrapper'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png'
            alt=''
            className='logo'
          />

          <button className='loginButton' onClick={() => navigate("/login")}>
            Sign In
          </button>
        </div>
      </div>
      <div className='container'>
        <h1>Unlimited movies,TV shows amd more.</h1>
        <h2>Watch anywhere.Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email ? (
          <div className='input'>
            <input type='email' placeholder='Email' ref={emailRef} />
            <button className='registerButton' onClick={handleStart}>
              Get Started
            </button>
          </div>
        ) : (
          <form className='input'>
            <input
              type='text'
              placeholder='Username'
              ref={usernameRef}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type='password'
              placeholder='Password'
              ref={passwordRef}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className='registerButton' onClick={handleFinish}>
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Register;
