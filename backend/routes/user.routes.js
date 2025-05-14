import {
  createUsers,
  loginUser,
  getAllUsers
} from '../controllers/user.controllers.js';

import express from 'express';
const router = express.Router();

// User creation and get all users
router.route('/user')
  .post(createUsers)
  .get(getAllUsers);

// Login route — FIXED
router.route('/login')
  .post(loginUser);

export default router;
