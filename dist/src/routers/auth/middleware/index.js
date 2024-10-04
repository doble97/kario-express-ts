"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
exports.authMiddleware = {
    checkEmailAndPassword: (req, res, next) => {
        if (req.body.email && req.body.password)
            next();
        const response = { message: 'Faltan campos', success: false };
        res.status(401).json(response);
    }
};
