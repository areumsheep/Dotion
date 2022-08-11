import express from 'express';
import {
  getUserList,
  getUserByToken,
  postUser,
} from './controllers/user.controller';
import {
  getCalendars,
  getTags,
  addCalendarPage,
  updateCalendarPage,
  deleteCalendarPage,
} from './controllers/notion.controller';

const router = express.Router();

router.get('/users', getUserList);
router.get('/users/:token', getUserByToken);
router.post('/user', postUser);

router.get('/calendars', getCalendars);
router.get('/tags', getTags);
router.post('/calendar', addCalendarPage);
router.patch('/calendar', updateCalendarPage);
router.delete('/calendar', deleteCalendarPage);

export default router;
