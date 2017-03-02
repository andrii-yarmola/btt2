import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt from 'jsonwebtoken';

export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  user 
});

// async actions
export function userSignupRequest(userData) {
  return dispatch => {
    return axios.post('/api/users', userData)
  }
}

export function login(data) {
  return dispatch => {
    return axios.post('/api/auth', data).then(res => {
      const token = res.data.token;
      if (token) {
        // TODO : if data.isNeedToSave === false we should save userinfo sovewhere
        if (data.isNeedToSave) { localStorage.setItem('jwtToken', token) };
        setAuthToken(token);
        dispatch(setCurrentUser(jwt.decode(token)));
      }
    })
  }
}
