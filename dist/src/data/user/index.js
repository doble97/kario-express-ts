"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userData = void 0;
const index_1 = __importDefault(require("../../data/index"));
exports.userData = {
    createUser: (data) => {
        return new Promise((resolve, reject) => {
            index_1.default.getConnection()
                .then(conn => {
                const query = 'INSERT INTO users(name, last_name, email, password) VALUES(?,?,?,?)';
                conn.query(query, [data.name, data.last_name, data.email, data.password])
                    .then(res => {
                    console.log('Respuesta del insert', res);
                    console.log('Respuesta id', res.insertId, typeof res.insertId);
                    conn.release();
                    const user = {
                        email: data.email,
                        name: data.name,
                        last_name: data.last_name,
                        id: Number(res.insertId),
                        created_at: data.created_at
                    };
                    resolve(user);
                })
                    .catch(err => {
                    console.log('Error en el insert', err);
                    conn.release();
                    reject(err);
                });
            })
                .catch(err => {
                console.log('Error en obtener conn', err);
                reject(err);
            });
        });
    }
};
