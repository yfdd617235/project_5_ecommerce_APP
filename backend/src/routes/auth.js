const {Router} = require('express')
const signUp = require('../controllers/auth')

const auth = (server) =>{
    const router = Router()
    server.use('/auth', router) //middleware configuration for initial routing
    router.post('/signUp', signUp) 
}

module.exports = auth;