"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
// import { userData } from "@data/user";
const user_1 = require("../data/user");
exports.userController = {
    register: (req, res) => {
        user_1.userData.createUser(res.locals.user)
            .then(resp => {
            res.json({ message: 'exito en llamada', data: resp });
        })
            .catch(err => {
            console.log('comprobando el error', err);
            res.status(404).json({ message: 'Error al guardar', data: err });
        });
    }
};
