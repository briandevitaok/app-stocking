const express = require('express')
const app = express()



app.get('/', (req,res)=>{
    res.send('Hola mundo')
    
})

app.post('/post', (req, res) =>{
    let body = req.body;

    if (body.nombre === undefined){

        res.status(400).json(
            {
                ok:false,
                mensaje:'El nombre es necesario'
            }
        );


    } else {
        res.json({
            persona:body
        })
    }

  
})


app.put('/update/:id', (req,res)=>{
    
    let id = req.params.id 
    res.json({
        id
    })

})



app.delete('/delete', (req,res)=>{
    res.send("delete")
})


module.exports = app;