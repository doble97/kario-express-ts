const horas = require('./utils/index')
const express = require('express');
const app = express();
const dotenv = require('dotenv')
dotenv.config();
const port = process.env.PORT;
const authRouters = require('./routers/auth/auth_router');
console.log(horas())
//USE ROUTERS
app.use('/auth', authRouters);

app.listen(port, () => {
    console.log('empezando ')
    console.log('Listening on port', port)
}).on("error", (error) => {
    // gracefully handle error
    throw new Error(error.message);
})