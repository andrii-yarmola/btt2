import express from 'express';
import bcrypt from 'bcrypt';
import User from '../models/user';
import jwt from 'jsonwebtoken';
import config from '../shared/jwtConfig';

let router = express.Router();

router.post('/', (req, res) => {
  const { username, password } = req.body;
  
  User.query({
    where: { username: req.body.username }
  }).fetch().then(user => {
    if (user && bcrypt.compareSync(password, user.get('password_digest'))) {
      const expiresIn = req.body.isNeedToSave ? '1y' : 60 * 60;
      const token = jwt.sign({
        id: user.get('id'),
        username: user.get('username')
      }, config.jwtSecret, { expiresIn });
      res.json({ token })
    }
    else {
      res.status(401).json({ errors: { 
        username: 'Invalid login or password',
        password: 'Invalid login or password',
      } })
    }
  })
});

export default router;

