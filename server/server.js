const express = require('express')
    , bodyParser = require('body-parser')
    , axios = require('axios')
    , massive = require('massive')
    , session = require('express-session');

const app = express();
require('dotenv').config();
app.use(bodyParser.json());


let {
    SERVER_PORT,
    CONNECTION_STRING
} = process.env

massive( CONNECTION_STRING ).then( dbInstance => {
    console.log("db connected");
    app.set('db', dbInstance)
}).catch( error => console.error('Woops', error))

app.listen(SERVER_PORT, () => {
    console.log(`listening on port: ${SERVER_PORT}`)
})


