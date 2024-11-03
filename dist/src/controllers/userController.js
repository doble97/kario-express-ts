"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const datasources_1 = require("../data/datasources");
const authUtils_1 = require("../utils/checking/authUtils");
exports.userController = {
    register: (req, res) => {
        datasources_1.userData.createUser(res.locals.user)
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
        datasources_1.userData.getUserDb(res.locals.user.email)
            .then(data => res.json({ data: data }))
            .catch(err => res.status(400).json({ data: err }));
    }
};
