//Import Environment Variables
require('dotenv').config()
const express = require('express'); //export server
const connect = require('./src/config/db')

const server = express(); //conexion

//midlewares: is a indication of a process that the app has to do
server.use(express.json()); 

connect(); //connect from db

const PORT = 3001; //PORT to be used

//endpoint: referenced url
//Verbs or metods http
/*
    -GET: obtain data
    -POST: Create or do a process in the server
    -PUT: Update data
    -DELETE: Delete data
*/
server.get("/", (request, response) => {
    response.send("API ver 1.0.0")
});

//Initialize the server 
server.listen(process.env.PORT, () => { 
    console.log("server have initialized in PORT: ", process.env.PORT)
});