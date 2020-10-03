import React, { useEffect } from "react";
import {
  GOOGLE_AUTH_URL,
  FACEBOOK_AUTH_URL,
  GITHUB_AUTH_URL,
  ACCESS_TOKEN,
} from "../../../constants";
import { useFormik } from "formik";
import fbLogo from "../../../assets/img/fb-logo.png";
import googleLogo from "../../../assets/img/google-logo.png";
import githubLogo from "../../../assets/img/github-logo.png";

import React from "react";
import { Redirect } from "react-router-dom";

const Login = (props) => {
  useEffect(() => {
    if (props.location.state && props.location.state.error) {
      setTimeout(() => {
        alert("Error!");
        props.history.replace({
          pathname: this.props.location.pathname,
          state: {},
        });
      }, 100);
    }
    if (props.authenticated) {
      return (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location },
          }}
        />
      );
    }
  });
};

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="username">Username</label>
      <input
        id="username"
        name="username"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.username}
      />
      <input
        name="username"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.usernmae}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

const SocialLogin = () => {
  return (
    <div className="social-login">
      <a className="btn btn-block social-btn google" href={GOOGLE_AUTH_URL}>
        <img src={googleLogo} alt="Google" /> Log in with Google
      </a>
      <a className="btn btn-block social-btn facebook" href={FACEBOOK_AUTH_URL}>
        <img src={fbLogo} alt="Facebook" /> Log in with Facebook
      </a>
      <a className="btn btn-block social-btn github" href={GITHUB_AUTH_URL}>
        <img src={githubLogo} alt="Github" /> Log in with Github
      </a>
    </div>
  );
};

export default Login;
