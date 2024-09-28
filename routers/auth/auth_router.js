const express = require('express')
const router = express.Router();
const getTime = require('../../utils/index')

//Middleware
const timeLog = (req, res, next)=>{
    console.log('\n***************************************')
    console.log("Time:", getTime(), '\nPath:', req.originalUrl, '\nMethod:', req.method)
    console.log('***************************************')
    next();
}
router.use(timeLog)
router.get('/login', (req, res)=>{
    res.json('Datos recibidos')
});

module.exports = router;