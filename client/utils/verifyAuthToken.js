import jwt from 'jsonwebtoken';
import { setCurrentUser } from '../actions/actionCreators';
import setAuthToken from './setAuthToken';
import store, { history } from '../store';
import config from '../../server/shared/jwtConfig';

export default function verifyAuthToken(token) {
  if (localStorage.jwtToken) {
    jwt.verify(localStorage.jwtToken, config.jwtSecret , function(err, decoded) {
      if (err) {
        localStorage.removeItem('jwtToken');
      } else {
        setAuthToken(localStorage.jwtToken);
        store.dispatch(setCurrentUser(jwt.decode(localStorage.jwtToken)));
      }
    });
  }
}