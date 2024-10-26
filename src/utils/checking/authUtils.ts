import { NextFunction, Request, Response } from "express"
import { ApiResponse } from "@/domain/apiResponse";
import { User } from "@/domain/user";
import { getUser } from "../utils";
import {createSecretKey} from 'crypto';
import { SignJWT } from "jose";
// const secretKey = createSecretKey(process.env.JWT_SECRET || 'fsd2398fasñ','utf-8' )
const secretKey = Buffer.from(process.env.JWT_SECRET || 'fsd2398fasñ')



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
    createToken:(user:User):Promise<string>=>{
        return new Promise((resolve, reject)=>{
            new SignJWT({
                id:user.id,
                email:user.email
            })
            .setProtectedHeader({
                alg: 'HS256'
               })
            .setIssuedAt()
            .setIssuer(process.env.JWT_ISSUER!)
            .setAudience(process.env.JWT_AUDIENCE!)
            .setExpirationTime(process.env.JWT_EXPIRATION_TIME!)
            .sign(secretKey)
            .then(resp=>resolve(resp))
            .catch(err=>reject(err));
        });
    }
}