import { useContext } from "react";
import { useState } from "react";
import { login } from "../../context/authContext/apiCalls";
import { AuthContext } from "../../context/authContext/AuthContext";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);
  };

  return (
    <div className='login'>
      <form className='loginForm'>
        <input
          type='email'
          className='loginInput'
          placeholder='email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          className='loginInput'
          placeholder='password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className='loginButton'
          onClick={handleClick}
          disabled={isFetching}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
