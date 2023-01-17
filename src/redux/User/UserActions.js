import {
  signInWithGoogle,
  signOut,
  signInWithFacebook,
} from "../../apis/firebase";

export function startLoading() {
  return {
    type: "START_LOADING",
  };
}

export function updateUserData(payload) {
  return {
    type: "UPDATE_USER_DATA",
    payload,
  };
}

export function updateError(payload) {
  return {
    type: "UPDATE_ERROR",
    payload,
  };
}

export function loginUser(provider) {
  return (dispatch) => {
    dispatch(startLoading());
    if (provider === "google") {
      signInWithGoogle()
        .then((response) => {
          const payload = response.user;

          dispatch(updateUserData(payload));
        })
        .catch((error) => {
          dispatch(updateError(error));
        });
    } else if (provider === "facebook") {
      signInWithFacebook()
        .then((response) => {
          const payload = response.user;

          dispatch(updateUserData(payload));
        })
        .catch((error) => {
          dispatch(updateError(error));
        });
    }
  };
}

export function logoutUser() {
  return (dispatch) => {
    dispatch(startLoading());

    signOut()
      .then(() => {
        dispatch(updateUserData(null));
      })
      .catch((error) => {
        dispatch(updateError(error));
      });
  };
}
