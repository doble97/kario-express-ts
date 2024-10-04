import { User } from "@/domain/user";
// import { genSaltSync, hashSync } from "bcrypt-ts";
import crypto from 'crypto';
export const getHours = () => {
    const ahora = new Date();
    const opciones: Intl.DateTimeFormatOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false };
    const horaFormateada = ahora.toLocaleTimeString('es-ES', opciones);
    return horaFormateada;
}

export const getUser = (data: any) => {
    const user: User = {
        email: data.email,
        password: getHashedPassword(data.password),
        name: data.name,
        last_name: data.last_name,
        created_at: new Date()
    }
    return user;
}

export const getHashedPassword = (value: string) => {
    // return new Promise((resolve, reject) => {
    //     genSalt(Number(process.env.SALTROUND) || 10)
    //         .then((salt) => {
    //             hash(value, salt)
    //                 .then((hashedPassword) => {
    //                     resolve(hashedPassword);
    //                 })
    //                 .catch(err => reject(err))
    //         })
    //         .catch(err=>reject(err));
    // });
    // const salt = genSaltSync(Number(process.env.SALTROUNDS) || 10)
    // const hashedPassword = hashSync(value, salt);
    // return hashedPassword;
    // const salt = crypto.randomBytes(32).toString('hex');
    const salt = process.env.SALT!;
    const genHash = crypto.pbkdf2Sync(value, salt, 10000, 64, 'sha512').toString('hex')
    return genHash;
}

export const validPassword = (password:string, hashedPassword:string)=>{
    const checkHash = getHashedPassword(password);
    return hashedPassword === checkHash;
}