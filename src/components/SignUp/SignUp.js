import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState("");
  const [createUserWithEmailAndPasswor, user] =
    useCreateUserWithEmailAndPassword(auth);

  const navigate = useNavigate();

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPass = (event) => {
    setConfirmPass(event.target.value);
  };

  const handleCreateUser = (e) => {
    e.preventDefault();
    if (password !== confirmPass) {
      setError("Confirm Password not matched ");
      return;
    }
    createUserWithEmailAndPasswor(email, password);
  };

  if (user) {
    navigate("/shop");
  }

  return (
    <div className="form-container">
      <form onSubmit={handleCreateUser}>
        <h2 className="form-title">Sign Up</h2>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id=""
            required
            onBlur={handleEmail}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id=""
            required
            onBlur={handlePassword}
          />
        </div>
        <div className="input-group">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            name="confirm-password"
            id=""
            required
            onBlur={handleConfirmPass}
          />
        </div>
        <p style={{ color: "red" }}>{error}</p>
        {/* {loading && <p>Loading...</p>} */}
        <input className="form-submit" type="submit" value="Sign Up" />
      </form>
      <p>
        Already Have An Account?
        <Link className="form-link" to="/login">
          Login here
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
