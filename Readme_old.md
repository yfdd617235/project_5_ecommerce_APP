##Projct ecomerce

It is recomendad use separate folders for backend and frontend, these two have to run in different frameworks



##Frontend folder

    1. In gitbash terminal: 
        - npx create-react-app ./ //To create react app
        - npm install react-router-dom
        - npm install react-bootstrap
        - npm install bootstrap



##Backend folder

    1. In gitbash terminal: npm init -y // To init nodejs
    2. In gitbash terminal:
        - npm install express
        - npm install dotenv //to enviromental variables
        - npm install cors //help to comunicate between servers
        - npm install mongoose
        - npm install express-jwt //autentificación
        - npm install jsonwebtoken
    3. npm i nodemon --save-dev //used to keep running the proyect without need of re-start
    4. In: backend/package.json/"scripts" add:
    ,
    "dev": "node server.js",
    "start": "node server.js" 
    This is used for running the app with the selected words "dev, start"
    5. In: backend/package.json/server.js:
        const express = require('express'); //export server

        const server = express(); //conexion

        //midlewares: is a indication of a process that the app has to do
        server.use(express.json()); 

        console.log("hellow world from backend");

        const PORT = 3001; //PORT to be used

        //Initialize the server 
        server.listen(PORT, () => { 
            console.log("server have initialized in PORT: ", PORT)
        });
