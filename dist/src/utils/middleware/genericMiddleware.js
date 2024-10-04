"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeLog = void 0;
const utils_1 = require("../utils");
const timeLog = (req, res, next) => {
    console.log('\n***************************************');
    console.log("Time:", (0, utils_1.getHours)(), '\nPath:', req.originalUrl, '\nMethod:', req.method);
    console.log('***************************************');
    next();
};
exports.timeLog = timeLog;
