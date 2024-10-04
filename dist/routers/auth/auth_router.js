"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require('express')
// const router = express.Router();
// const getTime = require('../../utils/index')
const express_1 = require("express");
const index_1 = require("../../utils/index");
const middleware_1 = require("./middleware");
const router = (0, express_1.Router)();
//Middleware
const timeLog = (req, res, next) => {
    console.log('\n***************************************');
    console.log("Time:", (0, index_1.getHours)(), '\nPath:', req.originalUrl, '\nMethod:', req.method);
    console.log('***************************************');
    next();
};
router.use(timeLog);
router.use('/login', middleware_1.authMiddleware.checkEmailAndPassword);
router.get('/login', (req, res) => {
    res.json('Datos recibidos');
});
exports.default = router;
