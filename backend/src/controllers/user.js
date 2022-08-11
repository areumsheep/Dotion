import {init} from '../config/database';

const conn = init();

export const getUserList = async(req, res) => {
  const getUsersSQL = `SELECT * FROM users`;
  conn.query(getUsersSQL, (err, rows) => {
    if(err) {
      res.status(403).send(err.message);
    } else {
      if(rows[0]) {
        res.status(200).json(rows[0]);
      } else {
        res.status(403).send('No users data found');
      }
    }
  })
};