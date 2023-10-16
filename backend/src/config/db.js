
//Connection between Mongo and our project

require('dotenv').config();
const mongoose = require('mongoose');

const connect = async () => {
    const connection = await mongoose.connect(process.env.URI_DB);
    console.log("Connected to the DateBase", connection.connection.host);
}

module.exports = connect;