import express from 'express';
import { getMsg, msgSent } from '../controllers/messageController.js';
import isLoggedIn from '../middleware/isLogged.js';

const router = express.Router();

// POST route to send a message
router.post('/send/:id',isLoggedIn,msgSent);
router.get('/:id',isLoggedIn,getMsg);

export default router;
