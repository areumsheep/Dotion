import { init } from '../config/database';

const conn = init();

export const getUserList = async (req, res) => {
  const getUsersSQL = `SELECT * FROM users`;
  conn.query(getUsersSQL, (err, rows) => {
    if (err) {
      res.status(403).send(err.message);
    } else {
      if (rows[0]) {
        res.status(200).json(rows[0]);
      } else {
        res.status(403).send('No users data found');
      }
    }
  });
};

export const getUserByToken = async (req, res) => {
  const { token } = req.body;
  const getUserSQL = `SELECT * FROM users WHERE token LIKE ?`;
  conn.query(getUserSQL, token, (err, rows) => {
    if (err) {
      res.status(403).send(err.message);
    } else {
      if (rows[0]) {
        res.status(200).json(rows[0]);
      } else {
        res.status(403).send('No users data found');
      }
    }
  });
};

export const postUser = async (req, res) => {
  const { email, name, profile_img, token } = req.body;
  const getUserSQL = `SELECT * FROM users WHERE email = ?`;
  conn.query(getUserSQL, email, (err, rows) => {
    if (err) {
      res.status(403).send(err.message);
    } else {
      const params = [token, name, profile_img, email];
      if (rows[0]) {
        const userUpdateSQL = `UPDATE users SET token = ?, name = ?, profile_img = ?, update_date = NOW() WHERE email = ?`;
        conn.query(userUpdateSQL, params, function (err) {
          if (err) res.status(403).send(err.message);
          else res.status(200).json({ email, name, profile_img, token });
        });
      } else {
        const userInsertSQL = `INSERT INTO USERS(token, name, profile_img, email, create_date) VALUES(?, ?, ?, ?, NOW())`;
        conn.query(userInsertSQL, params, function (err) {
          if (err) res.status(403).send(err.message);
          else res.status(201).json({ email, name, profile_img, token });
        });
      }
    }
  });
};
