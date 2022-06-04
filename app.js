

const bodyParser = require('body-parser')
const mongoose = require('mongoose') 
const app = require('./routes/usuario')
const port = 5000




app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use("/usuario",require("./routes/usuario"))



mongoose.connect('mongodb://localhost:27017/cafe', (err, res)=>{
    if (err ) throw err;
    
    console.log('Mongo conexion exitosa');
});

app.listen(port, ()=>{
    console.log('Escuchando en el puerto', port)
})

