import { useFormik } from "formik";
import React, { useEffect } from "react";

import { Link, Redirect } from "react-router-dom";

import {
  GOOGLE_AUTH_URL,
  FACEBOOK_AUTH_URL,
  GITHUB_AUTH_URL,
} from "../../constants";

const Signup = (props) => {
  useEffect(() => {
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

  return (
    <div className="signup-container">
      <div className="signup-content">
        <h1 className="signup-title">Signup with SpringSocial</h1>
        <SocialSignup />
        <div className="or-separator">
          <span className="or-text">OR</span>
        </div>
        <SignupForm {...this.props} />
        <span className="login-link">
          Already have an account? <Link to="/login">Login!</Link>
        </span>
      </div>
    </div>
  );
};

const SignupForm = (props) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
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
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <input
        id="email"
        name="email"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <inpu
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Signup;
