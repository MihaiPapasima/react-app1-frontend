import React from "react";
import "../Shared/Styles.css";

const Login = () => {
  return (
    <div>
      <div className="my-form rounded-lg">
        <h3 className="my-title">Sign In</h3>
        <div class="input-group form-group">
          <input type="text" class="form-control" placeholder="Username" />
        </div>
        <div class="input-group form-group">
          <input type="password" class="form-control" placeholder="Password" />
        </div>
        <button type="button" className="btn-success rounded-lg btn-lg">
          Log In
        </button>
        <div>
          <button type="button" class="btn btn-link">
            Forgot password?
          </button>
        </div>
        <div>
          <button type="button" class="btn btn-link">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
