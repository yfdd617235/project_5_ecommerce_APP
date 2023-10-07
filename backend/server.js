//Import Environment Variables
require('dotenv').config()

const express = require('express'); //export server

const server = express(); //conexion

//midlewares: is a indication of a process that the app has to do
server.use(express.json()); 

const PORT = 3001; //PORT to be used


let menu = [
    {
        name: 'Tacos', price: '50'
    },
    {
        name: "burrito", price: '70'
    }
]

//endpoint: referenced url
//Verbs or metods http
/*
    -GET: obtain data
    -POST: Create or do a process in the server
    -PUT: Update data
    -DELETE: Delete data
*/
server.get("/", (request, response) => {
    response.send("Hellow this is the API ver 1.0.0")
});

server.get("/menu", (request, response) => {
    response.json(
        {
            data: menu,
            count: menu.length,
            message: "The menu was successfully obtained"
        }
        )
});

server.post("/menu", (request, response) => {
    const food = request.body; //take info from frontend
    menu.push(food); // add data to the menu

    response.json(
        {
            data: menu,
            count: menu.length,
            message: "The food was added to the menu"
        }
        )
});

//Initialize the server 
server.listen(process.env.PORT, () => { 
    console.log("server have initialized in PORT: ", process.env.PORT)
});