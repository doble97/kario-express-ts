"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_router_1 = __importDefault(require("./src/routers/auth/auth_router"));
const app = (0, express_1.default)();
const port = process.env.PORT;
//Config middlewares
app.use(express_1.default.json()); //for parsing application/json
app.use(express_1.default.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
// //USE ROUTERS
app.use('/auth', auth_router_1.default);
app.listen(port, () => {
    console.log('Listening on port', port);
}).on("error", (error) => {
    // gracefully handle error
    throw new Error(error.message);
});
