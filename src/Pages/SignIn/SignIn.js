import React from "react";
import { Link } from "react-router-dom";
import "./SignIn.css";
const SignIn = () => {
  return (
    <div className="login-box">
      <h2>Login</h2>
      <form>
        <div className="user-box">
          <input type="text" name required />
          <label>Username</label>
        </div>
        <div className="user-box">
          <input type="password" name required />
          <label>Password</label>
          <input />
        </div>
        <a href="#">
          <span />

          <Link to={{ pathname: "/dashbord", state: { isAuth: false } }}>
            Submit
          </Link>
        </a>
      </form>
    </div>
  );
};

export default SignIn;
