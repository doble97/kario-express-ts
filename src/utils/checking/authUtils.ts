import { NextFunction, Request, Response } from "express"
import { ApiResponse } from "@/domain/apiResponse";
import { User } from "@/domain/user";
import { getUser } from "../utils";

export const authUtils =  {
    checkEmailAndPassword: (body:any):boolean=> {
        if(body.email && body.password) return true;
        return false

    },
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
    checkTokenIsValid:(token:string):boolean=>{
        return true;
    },
    createToken:(user:User)=>{
        
    }
}