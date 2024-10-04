import {Request, Response, Router } from "express"
import { userController } from "@/controllers/userController";
import { timeLog } from "@/utils/checking/genericMiddleware";
import { authMiddleware } from "@/controllers/middlewares/auth";

const router = Router();
//Middleware
router.use(timeLog)
router.use('/login', authMiddleware.checkEmailAndPassword);
router.get('/login', (req:Request, res:Response)=>{
    res.json('Datos recibidos')
});
router.post('/register', authMiddleware.checkEmailAndPassword,userController.register);
export default router;