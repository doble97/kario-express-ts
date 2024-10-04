import { ApiResponse } from "@/domain/apiResponse";
import { NextFunction, Request, Response } from "express";
import { authUtils } from "@/utils/checking/authUtils";

export const authMiddleware ={
    // checkToken: (req:Request, res:Response, next: NextFunction)=>{
    //     const token = req.body.token;
    //     if(!token) return res.status(401).json(<ApiResponse>{success:false, message:"Error in token"});
    //     next();
    // },
    checkEmailAndPassword: (req:Request, res:Response, next:NextFunction)=>{
        if(authUtils.checkEmailAndPassword(req.body)) return next();
        res.status(401).json(<ApiResponse>{message:'Faltan campos', success:false})
    },
    checkToken: (req:Request, res:Response, next:NextFunction)=>{
            const isValid = authUtils.checkTokenIsValid(req.body.token);
            if(!isValid) return res.status(401).json(<ApiResponse>{success:false, message:"Error in token"});
            next();
    }
}