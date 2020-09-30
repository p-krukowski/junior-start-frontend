let user = JSON.parse(localStorage.getItem("user"));

export function authHeaderUploadFile(authenticatedUser = user) {
  if (authenticatedUser) {
    return {
      Authorization: `Bearer ${user}`,
    };
  } else {
    return {};
  }
}
