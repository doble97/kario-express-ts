"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const user_1 = require("../data/user");
const authUtils_1 = require("../utils/checking/authUtils");
exports.userController = {
    register: (req, res) => {
        user_1.userData.createUser(res.locals.user)
            .then(resp => {
            authUtils_1.authUtils.createToken(resp)
                .then(token => res.json({ success: true, message: 'Successful register', data: Object.assign(Object.assign({}, resp), { token }) }))
                .catch(err => res.status(400).json({ success: false, message: 'Error in create token', data: err }));
        })
            .catch(err => {
            console.log('comprobando el error', err);
            res.status(404).json({ message: 'Error in save data in db ', data: err });
        });
    },
    login: (req, res) => {
        user_1.userData.getUserDb(res.locals.user.email)
            .then(data => res.json({ data: data }))
            .catch(err => res.status(400).json({ data: err }));
    }
};
