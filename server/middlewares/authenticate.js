import jwt from 'jsonwebtoken';
import config from '../config';
import User from '../models/user';

export default (req, res, next) => {
  const authorizationHeader = req.headers['authorization'];
  let token;
  
  if (authorizationHeader) {
    token = authorizationHeader.split(' ')[1];
  }
  
  if (token) {
    jwt.verify(token, config.jwtSecret, (err, decoded) => {
      if (err) {
        res.status(401).json({ error: 'Failed to auth' });
      } else {
        new User({ id: decoded.id }).fetch().then(user => {
          if (!user) {
            res.status(404).json({ error: 'no such user' });
          } else {
            //req.curentUser = user;
            next();
          }
        });
      }
    });
  } else {
    res.status(403).json({
      error: 'No token provided'
    });
  }
}