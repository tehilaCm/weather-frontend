import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import $ from "jquery";

import weather from "../assets/sky.jpg";

import actions from "../actions";
import { signIn, signUp } from "../api";
import Backdrop from "./Backdrop";

const Auth = ({ auth }) => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [displayBackdrop, setDisplayBackdrop] = useState(false);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const history = useHistory();

  useEffect(() => {
    $("body").css("background-image", `url("${weather}")`);
  }, []);

  const toastError = (message) => {
    toast.error(message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handelSignUp = async (formData) => {
    try {
      setDisplayBackdrop(true);
      const { data } = await signUp(formData);
      auth(data);
      setDisplayBackdrop(false);
      history.push("/home");
    } catch (error) {
      setDisplayBackdrop(false);
      if (error.response && error.response.status === 409)
        toastError("User already exists");
      else toastError("Problem occurred. Please try again later");
    }
  };

  const handelSignIn = async (formData) => {
    try {
      setDisplayBackdrop(true);
      const { data } = await signIn(formData);
      auth(data);
      setDisplayBackdrop(false);
      history.push("/home");
    } catch (error) {
      setDisplayBackdrop(false);
      if (error.response && error.response.status === 401)
        toastError(
          "Authentication failed. Please check you'r email and password"
        );
      else toastError("Problem occurred. Please try again later");
    }
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    emailRef.current.style.borderColor = "#ced4da";
    passwordRef.current.style.borderColor = "#ced4da";

    if (!email) {
      emailRef.current.style.borderColor = "red";
      return toastError("You must fill you'r email");
    }

    if (!password) {
      passwordRef.current.style.borderColor = "red";
      return toastError("You must provide a password");
    }

    if (!isSignUp) {
      const confirmPassword = confirmPasswordRef.current.value;
      confirmPasswordRef.current.style.borderColor = "#ced4da";

      if (!confirmPassword) {
        confirmPasswordRef.current.style.borderColor = "red";
        return toastError("You must confirm you'r password");
      }

      if (password.length < 6) {
        passwordRef.current.style.borderColor = "red";
        return toastError("Passwords must contain at least 6 characters");
      }

      if (password !== confirmPassword) {
        passwordRef.current.style.borderColor = "red";
        confirmPasswordRef.current.style.borderColor = "red";
        return toastError("Passwords doesn't match");
      }
    }

    if (!isSignUp) handelSignUp({ email, password });
    else handelSignIn({ email, password });
  };

  return (
    <>
      {displayBackdrop && <Backdrop />}
      <form className="auth-form" onSubmit={handelSubmit}>
        <div className="mb-3">
          <input
            type="email"
            placeholder="Email address"
            className="form-control"
            aria-describedby="emailHelp"
            ref={emailRef}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            placeholder="Password"
            className="form-control"
            id="exampleInputPassword1"
            ref={passwordRef}
          />
        </div>
        {!isSignUp && (
          <div className="mb-3">
            <input
              type="password"
              placeholder="Confirm password"
              className="form-control"
              id="exampleInputPassword2"
              ref={confirmPasswordRef}
            />
          </div>
        )}
        <button
          type="submit"
          className="btn"
          style={{ backgroundColor: "#4993ff", color: "white" }}
        >
          Submit
        </button>
        <br />
        <br />
        {isSignUp ? (
          <>
            <p className="change-mode">Don't have an account yet?</p>
            <p className="sign" onClick={() => setIsSignUp(!isSignUp)}>
              Sign up
            </p>
          </>
        ) : (
          <>
            <p className="change-mode">Already have an account?</p>
            <p className="sign" onClick={() => setIsSignUp(!isSignUp)}>
              Sign In
            </p>
          </>
        )}
      </form>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    auth: (data) => dispatch(actions.auth(data)),
  };
};

export default connect(null, mapDispatchToProps)(Auth);
