import express from 'express';
import authRouter from './src/routers/auth/auth_router';
const app = express();
const port = process.env.PORT;

//Config middlewares
app.use(express.json())//for parsing application/json
app.use(express.urlencoded({extended:true})) // for parsing application/x-www-form-urlencoded
// //USE ROUTERS
app.use('/auth', authRouter);

app.listen(port, () => {
    console.log('Listening on port', port)
}).on("error", (error) => {
    // gracefully handle error
    throw new Error(error.message);
})