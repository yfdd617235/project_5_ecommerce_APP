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

const logIn = async(req, res) =>{
    const {email, password} = req.body
    console.log(email.password)

    if(!(email && password)){
        return res.status(400).json({
            success: false,
            messge: 'Credentials not registered'
        })
    }

    //consult user in database
    const user = await User.findOne({email})
    console.log("user: ", user)
    
    if (email === user.email && bcrypt.compareSync(password, user.password)){
        const userJSON = user.toJSON()
        delete userJSON.password
        const role = user.role
        const token = jwt.sign(userJSON, process.env.JWTKEY, {expiresIn: '7d'})
        const userProfile = JSON.stringify(user)

        return res.json({
            success: true,
            message: "User Logged",
            role,
            token,
            userProfile
        })
    }

    return res.status(400).json({
        success: false,
        message: "User not found"
    })
}
//----------------------------------
const Profile = async(req, res) =>{
    console.log("user profile", req, res)
}


//----------------------------------
module.exports = {
    signUp,
    logIn,
    Profile
};