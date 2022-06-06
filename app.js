
const bodyParser = require('body-parser')
const mongoose = require('mongoose') 
const app = require('express')();
const port = process.env.PORT || 5000;
require('dotenv').config()

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(require("./routes/usuario"))



mongoose.connect(`mongodb+srv://briandevitaok:123456@development.jwaya24.mongodb.net/?retryWrites=true&w=majority`,(err, res)=>{
    if (err ) throw err;
    
    console.log('Mongo conexion exitosa');
});

app.listen(port, ()=>{
    console.log('Escuchando en el puerto', port)
})

