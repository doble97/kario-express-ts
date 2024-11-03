import pool from "..";

export const insert = async (query:string, data?:any)=>{
    // return new Promise((resolve, reject)=>{
    //     pool.getConnection()
    //         .then(conn=>{
    //             conn.query(query, data)
    //                 .then(result=>{
    //                     resolve(result)
    //                 })
    //                 .catch(err=>reject(err));
    //             conn.release();
    //         })
    //         .catch(err=>{
    //             reject(err);
    //         });
    // });
    let conn;
    try {
        conn = await pool.getConnection();
        const result = await conn.query(query, data);
        return result;
    } catch (error) {
        return error
    }
}