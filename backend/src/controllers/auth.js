const User = require('../models/Users')

const signUp = async(req, res) =>{
    const user = new User(req.body)
    const userSaved = await user.save()
    return res.json({
        success: true,
        message: 'user registered successfully',
        data: userSaved
    })
}

module.exports = signUp;