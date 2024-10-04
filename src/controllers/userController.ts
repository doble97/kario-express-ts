// import { userData } from "@data/user";
import { userData } from "@/data/user";
import { Request, Response } from "express";

export const userController = {
    register: (req:Request, res:Response)=>{
        userData.createUser(res.locals.user)
            .then(resp=>{
                res.json({message:'exito en llamada', data:resp})
            })
            .catch(err=>{
                console.log('comprobando el error', err)
                res.status(404).json({message:'Error al guardar', data: err})
            })

    }
}
