import { Router } from "express";
import isLoggedIn from "../middleware/isLogged.js";
import { getUsers } from "../controllers/userControllers.js";


const router = Router()


router.get('/', isLoggedIn,getUsers)

export default router