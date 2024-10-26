import {Request, Response, Router } from "express"
import { userController } from "@/controllers/userController";
import { timeLog } from "@/utils/checking/genericMiddleware";
import { authMiddleware } from "@/controllers/middlewares/authMiddleware";

const router = Router();
//Middleware
router.use(timeLog)
router.get('/login',authMiddleware.checkEmailAndPassword, userController.login);
router.post('/register', authMiddleware.checkRegister,userController.register);

export default router;