const jwt = require('jsonwebtoken')
require('dotenv').config()
const User = require('../models/Users')
const bcrypt = require('bcrypt')

const signUp = async(req, res) =>{

    try{
        const user = new User(req.body)
        user.hashPassword(req.body.password)
        const userSaved = await user.save()
        return res.json({
            success: true,
            message: 'user registered successfully',
            data: userSaved
        })
    }catch(error){
        console.log(error)
        return res.json({
            success: false,
            messge: 'Error of user registration'
        })
    }


}

module.exports = signUp;