"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validPassword = exports.getHashedPassword = exports.getUser = exports.getHours = void 0;
// import { genSaltSync, hashSync } from "bcrypt-ts";
const crypto_1 = __importDefault(require("crypto"));
const getHours = () => {
    const ahora = new Date();
    const opciones = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false };
    const horaFormateada = ahora.toLocaleTimeString('es-ES', opciones);
    return horaFormateada;
};
exports.getHours = getHours;
const getUser = (data) => {
    const user = {
        email: data.email,
        password: (0, exports.getHashedPassword)(data.password),
        name: data.name,
        last_name: data.last_name,
        created_at: new Date()
    };
    return user;
};
exports.getUser = getUser;
const getHashedPassword = (value) => {
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
    const salt = process.env.SALT;
    const genHash = crypto_1.default.pbkdf2Sync(value, salt, 10000, 64, 'sha512').toString('hex');
    return genHash;
};
exports.getHashedPassword = getHashedPassword;
const validPassword = (password, hashedPassword) => {
    const checkHash = (0, exports.getHashedPassword)(password);
    return hashedPassword === checkHash;
};
exports.validPassword = validPassword;
