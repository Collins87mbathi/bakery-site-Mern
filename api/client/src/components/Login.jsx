import React,{useState} from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import {CartState} from "../context/Context";
import {axiosInstance} from '../config';
const Login = () => {

const { dispatch } = CartState();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
    const handleSubmit = async (e) => {
      e.preventDefault();
      dispatch({type:"LOGIN_START"});
      try {
        const res = await axiosInstance.post("api/auth/login", { username, password });
        dispatch({type: "LOGIN_SUCCESS", payload: res.data });

      } catch (err) {
        console.log(err);
        setError(true);
      }
    };

    return (
        <div className="login">
        <span className="loginTitle">Login</span>
        <form className="loginForm" onSubmit={handleSubmit} >
          <label>Username</label>
          <input className="loginInput" type="text" placeholder="Enter your username..." 
           onChange={(e) => setUsername(e.target.value)}
          />
          <label>Password</label>
          <input className="loginInput" type="password" placeholder="Enter your password..." 
          onChange={(e) =>setPassword(e.target.value)}
          />
          <button className="loginButton" type="submit" >Login</button>
        </form>
          
          <button className="loginRegisterButton"><Link className="link" to="/signup">Register</Link></button>
        {error && <span style={{color:"red", marginTop:"10px"}}> Wrong crediantials</span>}
      </div>
    )
}

export default Login
