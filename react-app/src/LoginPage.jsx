import React from "react";
import "./Loginstyle.css";

const LoginPage = () => {
  return (
    <div className="container">
      <h1>Student Registration</h1>

      <div className="form">
        <div className="input-group">
          <label>Name:</label>
          <input type="text" placeholder="Enter Name" />
        </div>

        <div className="input-group">
          <label>Age:</label>
          <input type="number" placeholder="Enter Age" />
        </div>

        <div className="input-group">
          <label>Department:</label>
          <input type="text" placeholder="Enter Department" />
        </div>

        <button onClick={() => alert("Registration Successful!")}>
          Register
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
