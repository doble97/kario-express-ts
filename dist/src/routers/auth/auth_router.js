"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../../controllers/userController");
const authMiddleware_1 = require("../../utils/middleware/authMiddleware");
const genericMiddleware_1 = require("../../utils/middleware/genericMiddleware");
const router = (0, express_1.Router)();
//Middleware
router.use(genericMiddleware_1.timeLog);
router.use('/login', authMiddleware_1.authMiddleware.checkEmailAndPassword);
router.get('/login', (req, res) => {
    res.json('Datos recibidos');
});
router.post('/register', authMiddleware_1.authMiddleware.checkRegister, userController_1.userController.register);
exports.default = router;
