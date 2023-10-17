//Import Environment Variables
require('dotenv').config()
const express = require('express'); //export server
const cors = require('cors')
const connect = require('./src/config/db')
const product = require('./src/routes/products')
const server = express(); //conexion


server.use(cors())
//midlewares: is a indication of a process that the app has to do
server.use(express.json()); 

connect(); //connect from db

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

product(server)

//Initialize the server 
server.listen(process.env.PORT, () => { 
    console.log("server have initialized in PORT: ", process.env.PORT)
});