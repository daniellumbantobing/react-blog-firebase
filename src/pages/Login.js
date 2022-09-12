import React from "react";
import {auth, provider} from "../firebase-confic"
import {signInWithPopup} from "firebase/auth";
import { useNavigate  } from "react-router-dom";
const Login = ({setIsAuth}) =>{
  let navigate = useNavigate();
  const signInwithGoogle = () => {
      signInWithPopup(auth, provider).then(()=>{
      localStorage.setItem("isAuth", true);
      navigate("/");
      setIsAuth(true);
    })
    
  } 

    return (
        <div className="loginPage">
           <p>Sign In With Google to Continue</p>
            <button className="login-with-google-btn" onClick={signInwithGoogle}>
            Sign in with Google
      </button>
        </div>
    )
}

export default Login;

