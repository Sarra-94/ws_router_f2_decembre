import React from "react";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <form>
      <input />
      <input />
      <Link to={{pathname='/dashbord',state:{isAuth:false}}}>
        <button>Submit</button>
      </Link>
    </form>
  );
};

export default Signin;
