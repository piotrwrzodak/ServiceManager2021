import * as authAT from './auth.action-types';
import { URL } from '../../constants';

const baseUrl = `${URL}/login`;

const updateAuthState = (newAuthState) => ({
  type: authAT.SET_AUTH_STATE,
  payload: newAuthState,
});

const setUserType = (type) => ({
  type: authAT.SET_USER_TYPE,
  payload: type,
});

// right now good response is text and bad json
export const tryLogin = ({ login, password }) => {
  return (dispatch) => {
    fetch(`${baseUrl}/${login}+${password}`)
      .then((res) => handleResponse(res, dispatch))
      .then((res) => res.text())
      .then((res) => {
        console.log(res);
        localStorage.setItem('apiKey', res);
        dispatch(setUserType(parseInt(res.charAt(res.length - 1))));
        dispatch(updateAuthState(true));
      })
      .catch((res) => {
        console.error(res);
        localStorage.removeItem('apiKey');
      });
  };
};

const handleResponse = (response, dispatch) => {
  if (!response.ok) {
    if (response?.status === 404) {
      throw response;
    }

    throw response;
  }
  return response;
};

export const logout = () => (dispatch) => {
  dispatch(updateAuthState(false));
  localStorage.removeItem('apiKey');
};