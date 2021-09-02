const express = require('express')
const bodyparser = require('body-parser')
var app = express()
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))

const userRoutes = require('./routes/routes')
app.use('/user',userRoutes)

app.listen(3000,() => {
    console.log('Listening to the port..')
});

