"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../../controllers/userController");
const genericMiddleware_1 = require("../../utils/checking/genericMiddleware");
const authMiddleware_1 = require("../../controllers/middlewares/authMiddleware");
const router = (0, express_1.Router)();
//Middleware
router.use(genericMiddleware_1.timeLog);
router.get('/login', authMiddleware_1.authMiddleware.checkEmailAndPassword, userController_1.userController.login);
router.post('/register', authMiddleware_1.authMiddleware.checkRegister, userController_1.userController.register);
exports.default = router;
