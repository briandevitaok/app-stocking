
const bodyParser = require('body-parser')
const mongoose = require('mongoose') 
const app = require('express')();
const urlDB = require('./config')
// const port = process.env.PORT || 5000;
require('dotenv').config()

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(require("./routes/usuario"))



mongoose.connect(`mongodb+srv://briandevitaok:${process.env.MONGO_DB_PASS}@development.jwaya24.mongodb.net/?retryWrites=true&w=majority`,(err, res)=>{
    if (err ) throw err;
    
    console.log('Mongo conexion exitosa');
});

app.listen((process.env.PORT || 3000), ()=>{
    console.log('Escuchando en el puerto ',process.env.PORT || 3000)
})

