import pool from "@/data/index";
import { User } from "@/domain/user";
import { insert } from "./generic_crud";

export const userData = {
    createUser: async (data: User): Promise<User> => {
        try {
            const query =
                "INSERT INTO users(name, last_name, email, password) VALUES(?,?,?,?)";
            const result = await insert(query, [
                data.name,
                data.last_name,
                data.email,
                data.password,
            ]);
            const user: User = {
                email: data.email,
                name: data.name,
                last_name: data.last_name,
                id: Number(result.insertId),
                created_at: data.created_at,
            };
            return user;
        } catch (error) {
            throw error;
            
        }
    },
    // createUser: (data: User): Promise<User> => {
    //     return new Promise((resolve, reject) => {
    //         pool.getConnection()
    //             .then(conn => {
    //                 const query = 'INSERT INTO users(name, last_name, email, password) VALUES(?,?,?,?)'
    //                 console.log('datos', data)
    //                 conn.query(query, [data.name, data.last_name, data.email, data.password])
    //                     .then(res => {
    //                         const user: User = {
    //                             email: data.email,
    //                             name: data.name,
    //                             last_name: data.last_name,
    //                             id: Number(res.insertId),
    //                             created_at: data.created_at
    //                         }
    //                         resolve(user)
    //                     })
    //                     .catch(err => {
    //                         console.log('Error en el insert', err)
    //                         reject(err)
    //                     })
    //                 conn.release();
    //             })
    //             .catch(err => {
    //                 reject(err)
    //             })
    //     })
    // },
    getUserDb:(email:string):Promise<User>=>{
        return new Promise((resolve, reject)=>{
            const statement = 'SELECT * FROM users where email=? limit 1';
            pool
                .query(statement, [email])
                    .then(data=>resolve(data))
                    .catch(err=>reject(err))
        });
    }
};
