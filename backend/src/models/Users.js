const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    name: String,
    LastName: String,
    phone: String,
    email: String,
    password: Number
});

userSchema.methods.hashPassword = function(password){
    this.password = bcrypt.hashSync(password, 10000)
}

const User = mongoose.model('User', userSchema)

module.exports = User;