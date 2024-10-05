import express from 'express';
import isAuthenticate from '../middleware/isAuthenticated.js';
import { getCompany, getCompanyById, registerCompany, updateCompany } from '../controllers/company.controller.js';
const router = express.Router();

router.route('/register').post(isAuthenticate,registerCompany)
router.route('/get').get(isAuthenticate,getCompany)
router.route('/get/:id').get(isAuthenticate,getCompanyById);
router.route('/update/:id').put(isAuthenticate,updateCompany);

export default router