"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const utils_1 = require("../utils");
exports.authMiddleware = {
    checkEmailAndPassword: (req, res, next) => {
        if (req.body.email && req.body.password)
            next();
        const response = { message: 'Faltan campos', success: false };
        res.status(401).json(response);
    },
    checkRegister: (req, res, next) => {
        if (req.body.email && req.body.password && req.body.name && req.body.last_name) {
            const user = (0, utils_1.getUser)(req.body);
            res.locals.user = user;
            next();
            return;
        }
        const response = { message: 'Faltan campos', success: false };
        res.status(400).json(response);
    }
};
