import { useState } from "react";
import "./login.scss";
import { login } from "../../authContext/apiCalls";
import { useContext } from "react";
import { AuthContext } from "../../authContext/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);
    navigate("/");
  };
  return (
    <div className='login'>
      <div className='top'>
        <div className='wrapper'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png'
            alt=''
            className='logo'
          />
        </div>
        <div className='container'>
          <form>
            <h1>Sign In</h1>
            <input
              type='email'
              placeholder='email or phone number'
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type='password'
              placeholder='password'
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className='loginButton' onClick={handleLogin}>
              Sign In
            </button>
            <span>
              New to Netflix?<b>Sign up now.</b>
            </span>
            <small>
              This page is protected by Google reCAPTCHA to ensure you are not a
              bot. <b>Learn more</b>.
            </small>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
