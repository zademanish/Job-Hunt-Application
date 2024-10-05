import express from 'express';
import isAuthenticate from '../middleware/isAuthenticated.js';
import { getAdminJobs, getAllJobs, getJobsById, postJobs } from '../controllers/job.controller.js';
const router = express.Router();

router.route('/post').post(isAuthenticate,postJobs)
router.route('/get').get(isAuthenticate,getAllJobs)
router.route('/getAdminJobs').get(isAuthenticate,getAdminJobs);
router.route('/get/:id').get(isAuthenticate,getJobsById);

export default router