import pool from '@/data/index';
import { User } from '@/domain/user';

export const userData = {
    createUser: (data: User):Promise<User> => {
        return new Promise((resolve, reject)=>{
            pool.getConnection()
            .then(conn => {
                const query = 'INSERT INTO users(name, last_name, email, password) VALUES(?,?,?,?)'
                conn.query(query, [data.name, data.last_name, data.email, data.password])
                    .then(res => {
                        console.log('Respuesta del insert', res)
                        console.log('Respuesta id', res.insertId, typeof res.insertId)
                        conn.release()
                        const user:User = {
                            email:data.email,
                            name: data.name,
                            last_name: data.last_name,
                            id: Number(res.insertId),
                            created_at:data.created_at
                        }
                        resolve(user);
                    })
                    .catch(err => {
                        console.log('Error en el insert', err)
                        conn.release()
                        reject(err)
                    })
            })
            .catch(err => {
                console.log('Error en obtener conn', err)
                reject(err)
            })
        })
    }
}