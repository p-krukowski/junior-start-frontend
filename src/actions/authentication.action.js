import { alertConstants, authenticationConstants } from "../constants";
import { authenticationService } from "../services";
import { alertActions } from "./";
import { handleResponse, history } from "../utils";
import Axios from "axios";

export const authenticationActions = {};

login = async (
  { username, password },
  service = authenticationService.login
) => {
  return (dispatch) => {
    dispatch(request());

    return service({ username, password }).then(
      (user) => {
        dispatch(success(user));
        history.push("/");
        window.location.reload();
      },
      (error) => {
        handleResponse(error);
        dispatch(failure(error.response.data.message));
        dispatch(alertActions.error(error.response.data.message));
      }
    );
  };

  request = async () => {
    return await { type: authenticationConstants.LOGIN_REQUEST };
  };

  success = async (user) => {
    return await { type: authenticationConstants.LOGIN_SUCCESS, user };
  };

  failure = async (error) => {
    return await { type: authenticationConstants.LOGIN_FAILURE, error };
  };
};
