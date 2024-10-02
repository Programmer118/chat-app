import { Router } from "express";
const router = Router()

import { signup, login, logout } from "../controllers/authControllers.js";


router.route('/signup').post(signup)
router.route('/login').post(login)
router.route('/logout').post(logout)

export default router