import { ApiResponse } from "@/domain/apiResponse";
import { NextFunction, Request, Response } from "express";
import { authUtils } from "@/utils/checking/authUtils";
import { User } from "@/domain/user";
import { getUser } from "@/utils/utils";

export const authMiddleware ={
    checkRegister:(req:Request, res:Response, next:NextFunction)=>{
        if(req.body.email && req.body.password && req.body.name && req.body.last_name){
            const user:User = getUser(req.body);
            res.locals.user = user;
            next();
            return
        }
        const response:ApiResponse = {message:'Faltan campos', success:false} 
        res.status(400).json(response)
    },
    checkEmailAndPassword: (req:Request, res:Response, next:NextFunction)=>{
        if(authUtils.checkEmailAndPassword(req.body)){
            res.locals.user = <User>{email:req.body.email, password: req.body.password}
            return next();
        }
        res.status(401).json(<ApiResponse>{message:'Faltan campos', success:false})
    },
    checkToken: (req:Request, res:Response, next:NextFunction)=>{
            const isValid = authUtils.checkTokenIsValid(req.body.token);
            if(!isValid) return res.status(401).json(<ApiResponse>{success:false, message:"Error in token"});
            next();
    }
}