import jwt from 'jsonwebtoken';
import { setCurrentUser } from '../actions/actionCreators';
import setAuthToken from './setAuthToken';
import store, { history } from '../store';
import config from '../../server/shared/jwtConfig';

function verifyAuthToken(token) {
  return new Promise(function(resolve, reject) {
    if (localStorage.jwtToken) {
      jwt.verify(localStorage.jwtToken, config.jwtSecret , function(err, decoded) {
        if (err) {
          localStorage.removeItem('jwtToken');
          setAuthToken(false);
          store.dispatch(setCurrentUser({}));
          resolve('token is invalid');
        } else {
          setAuthToken(localStorage.jwtToken);
          store.dispatch(setCurrentUser(jwt.decode(localStorage.jwtToken)));
          resolve('token is setted');
        }
      });
    } else resolve('token is empty');
  });
}

export default verifyAuthToken;