import { NextFunction, Request, Response } from "express";
import { getHours } from "../utils";

export const timeLog = (req:Request, res:Response, next:NextFunction)=>{
    console.log('\n***************************************')
    console.log("Time:", getHours(), '\nPath:', req.originalUrl, '\nMethod:', req.method)
    console.log('***************************************')
    next();
}