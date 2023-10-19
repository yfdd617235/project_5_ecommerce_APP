const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    name: String,
    LastName: String,
    phone: String,
    email: String,
    password: String
});

// userSchema.methods.hashPassword = function(password){
//     this.password = bcrypt.hashSync(password, '10');
// }

userSchema.methods.hashPassword = function(password){
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    this.password = bcrypt.hashSync(password, salt);
}


const User = mongoose.model('User', userSchema)

module.exports = User;