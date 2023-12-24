import express from 'express'
import { text, updateUser, deleteUser, getUserListings } from '../controllers/user.controller.js';
import { verifyToken } from '../utills/verifyUser.js';

const router = express.Router();

router.get("/text", text);
router.post('/update/:id', verifyToken, updateUser );
router.delete('/delete/:id', verifyToken, deleteUser );
router.get('/listings/:id', verifyToken, getUserListings);

export default router;