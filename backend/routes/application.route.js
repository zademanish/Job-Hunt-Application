import express from 'express';
import isAuthenticate from '../middleware/isAuthenticated.js';
import { applyJobs, getApplicants, getAppliedJobs, updateStatus } from '../controllers/application.controller.js';
const router = express.Router();

router.route('/apply/:id').get(isAuthenticate,applyJobs)
router.route('/get').get(isAuthenticate,getAppliedJobs)
router.route('/:id/applicants').get(isAuthenticate,getApplicants);
router.route('/status/:id/update').post(isAuthenticate,updateStatus);

export default router