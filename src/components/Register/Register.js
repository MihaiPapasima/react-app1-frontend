import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <div>
      <div className="my-form rounded-lg">
        <h3 className="my-title">Register </h3>
        <div class="input-group form-group">
          <input type="text" class="form-control" placeholder="Username" />
        </div>
        <div class="input-group form-group">
          <input type="password" class="form-control" placeholder="Password" />
        </div>
        <div class="input-group form-group">
          <input
            type="password"
            class="form-control"
            placeholder="Repeat Password"
          />
        </div>
        <div class="input-group form-group">
          <input type="email" class="form-control" placeholder="Email" />
        </div>
        <div class="input-group form-group">
          <input type="email" class="form-control" placeholder="Repeat Email" />
        </div>
        <button type="button" className="btn-success rounded-lg btn-lg">
          Register
        </button>
        <div>
          <button type="button" class="btn btn-link">
            Already a user?
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
