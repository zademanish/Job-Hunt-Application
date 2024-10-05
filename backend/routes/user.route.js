import express from 'express';
import { Login, Logout, Register, UpdateProfile } from '../controllers/user.controller.js';
import isAuthenticate from '../middleware/isAuthenticated.js';
import { singleUpload } from '../middleware/multer.js';
const router = express.Router();

router.route('/register').post(singleUpload,Register)
router.route('/login').post(Login)
router.route('/logout').get(Logout);
router.route('/profile/update').post(isAuthenticate,UpdateProfile);

export default router