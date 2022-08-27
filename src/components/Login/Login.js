import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
const Login = () => {
  return (
    <div className="form-container">
      <form>
        <h2 className="form-title">Login</h2>

        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="" required />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="" required />
        </div>
        {/* <p style={{ color: "red" }}>{error?.message}</p>
        {loading && <p>Loading...</p>} */}
        <input className="form-submit" type="submit" value="Login" />
      </form>
      <p>
        Don't Have An Account?
        <Link className="form-link" to="/signup">
          Sign Up Now
        </Link>
      </p>
    </div>
  );
};

export default Login;
