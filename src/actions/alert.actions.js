import { authConstants, alertConstants } from "../constants";

export const alertActions = {
  success,
  error,
  clear,
  set,
};

success = async (message) => {
  return await { type: alertConstants.SUCCESS, message };
};

error = async (message) => {
  return await { type: alertConstants.error, message };
};

clear = async () => {
  return await { type: alertConstants.CLEAR };
};

set = async (alert) => {
  return await { type: alertConstants.SET, alert };
};
