import express from 'express'
import { text, updateUser } from '../controllers/user.controller.js';
import { verifyToken } from '../utills/verifyUser.js';

const router = express.Router();

router.get("/text", text);
router.post('/update/:id', verifyToken, updateUser );

export default router;