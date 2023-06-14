import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
//decode the login user details
import jwt_decode from "jwt-decode";
//icons
// import { FcGoogle } from "react-icons/fc";

//global
import { useStateContext } from "../../context/StateContext";
const Login = () => {
  const { setUser } = useStateContext();

  const navigate = useNavigate();

  const googleResponse = (response) => {
    var decoded = jwt_decode(response.credential);
    console.log(decoded);
    localStorage.setItem("user", JSON.stringify(decoded));
    setUser({
      name: decoded.name,
      image: decoded.picture,
    });
    navigate("/");
  };

  return (
    <div className="login-main">
      <div className="container">
        <div className="login">
          <div className="login-container">
            <h1>Login with google</h1>
            <div className="login-btn">
              <GoogleLogin
                onSuccess={googleResponse}
                onError={() => console.log("err")}
                useOneTap
              />
            </div>
          </div>
        </div>
        <div className="login-mid">
          <div className="login-mid-l"></div>
          <div className="login-mid-m">OR</div>
          <div className="login-mid-r"></div>
        </div>
        <div className="signup">
          <p>Don't have an account ?</p>
          <button type="button" className="signup-btn">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
