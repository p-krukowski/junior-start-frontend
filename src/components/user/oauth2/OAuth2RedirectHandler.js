import React from "react";
import { Redirect } from "react-router-dom";
import { ACCESS_TOKEN } from "../../../constants";

const OAuth2RedirectHandler = (props) => {
  getUrlParameter = (name) => {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");

    var results = regex.exec(this.props.location.search);
    return results === null
      ? ""
      : decodeURIComponent(results[1].replace(/\+/g, " "));
  };

  const token = getUrlParameter("token");
  const error = getUrlParameter("error");

  tokenIsExist = () => {
    localStorage.setItem(ACCESS_TOKEN, token);
    return (
      <Redirect
        to={{
          pathname: "/profile",
          state: { from: props.location },
        }}
      />
    );
  };

  tokenIsNotExist = () => {
    return (
      <Redirect
        to={{
          pathname: "/login",
          state: {
            from: props.location,
            error: error,
          },
        }}
      />
    );
  };

  return (
    <React.Fragment>{token ? tokenIsExist : tokenIsNotExist}</React.Fragment>
  );
};

export default OAuth2RedirectHandler;
