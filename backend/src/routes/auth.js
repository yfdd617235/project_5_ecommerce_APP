const {Router} = require('express')
const {signUp, logIn, Profile} = require('../controllers/auth')

const auth = (server) =>{
    const router = Router()
    server.use('/auth', router) //middleware configuration for initial routing
    router.post('/signUp', signUp)
    router.post('/logIn', logIn)
    router.get('/Profile', Profile)
}

module.exports = auth;