import { userData } from "@/data/user";
import { ApiResponse } from "@/domain/apiResponse";
import { authUtils } from "@/utils/checking/authUtils";
import { Request, Response } from "express";

export const userController = {
    register: (req: Request, res: Response) => {
        userData.createUser(res.locals.user)
            .then(resp => {
                authUtils.createToken(resp)
                    .then(token => res.json(<ApiResponse>{ success: true, message: 'Successful register', data: { ...resp, token } }))
                    .catch(err => res.status(400).json(<ApiResponse>{ success: false, message: 'Error in create token', data: err }));
            })
            .catch(err => {
                console.log('comprobando el error', err)
                res.status(404).json({ message: 'Error in save data in db ', data: err })
            })

    },
    login: (req:Request, res:Response)=>{
        userData.getUserDb(res.locals.user.email)
            .then(data=>res.json({data:data}))
            .catch(err=>res.status(400).json({data:err}))
    }
}
