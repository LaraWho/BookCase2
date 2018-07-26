const express = require('express')
    , bodyParser = require('body-parser')
    , axios = require('axios')
    , massive = require('massive')
    , session = require('express-session')
    , Cntrl = require('./book_controller');

const app = express();
require('dotenv').config();
app.use(bodyParser.json());


let {
    SERVER_PORT,
    CONNECTION_STRING
} = process.env

massive( CONNECTION_STRING ).then( dbInstance => {
    console.log("The Database is Connected!");
    app.set('db', dbInstance)
}).catch( error => console.error('Woops', error))

app.get('/api/book/:id', Cntrl.getOne);
app.get('/api/booklist', Cntrl.getAll);
app.put('/api/book/:id', Cntrl.update);
app.post('/api/book', Cntrl.create);
app.delete('/api/book/:id', Cntrl.delete);

app.listen(SERVER_PORT, () => {
    console.log(`Listening on port: ${SERVER_PORT}`)
})


