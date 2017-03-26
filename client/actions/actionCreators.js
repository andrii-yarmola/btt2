import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt from 'jsonwebtoken';

// sync actions

export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  user 
});

export const SET_CURRENT_CLIENTS_TABLE = 'SET_CURRENT_CLIENTS_TABLE';
export const setCurrentClientTable = (rows) => ({
  type: SET_CURRENT_CLIENTS_TABLE,
  rows 
});

export function logout() {
  return dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch(setCurrentUser({}));
  }
}

// async actions

export function userSignupRequest(userData) {
  return dispatch => {
    return axios.post('/api/users', userData);
  }
}

export function login(data) {
  return dispatch => {
    return axios.post('/api/auth', data).then(res => {
      const token = res.data.token;
      if (token) {
        localStorage.setItem('jwtToken', token);
        setAuthToken(token);
        dispatch(setCurrentUser(jwt.decode(token)));
      }
    })
  }
}

export function sendRequest(requestData) {
  return dispatch => {
    const { type, name, phone, time, date, email, message, files } = requestData;

    const data = new FormData();

    data.append('type', type);
    data.append('name', name);
    data.append('phone', phone);
    data.append('time', time);
    data.append('date', date);
    data.append('email', email);
    data.append('message', message );
    files.forEach(
      (file)=> { data.append('uploads', file) }
    );

    return axios.post('/api/requests', data);
  }
}

export function getClients(data) {
  const {search, pageSize, currentPage, activeFilter, filterDirectionUp} = data;
  const filterDirection = filterDirectionUp ? 'ASC' : 'DESC';
  const requestData = { search, pageSize, currentPage, activeFilter, filterDirection }
  return dispatch => {
    return axios.get('/api/requests', { params: requestData });
  }
}

export function getClient(id) {
  return dispatch => {
    return axios.get(`/api/requests/${id}`);
  }
}
