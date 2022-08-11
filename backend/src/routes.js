import express from 'express';
import { getUserList, getUserByToken, postUser } from './controllers/user';

const router = express.Router();

router.get('/users', getUserList);
router.get('/users/:token', getUserByToken);
router.post('/user', postUser);

export default router;
