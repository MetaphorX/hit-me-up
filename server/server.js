const express = require('express')
const dotenv = require('dotenv').config()
const cors = require("cors")
const mongoose = require("mongoose")
const port = process.env.PORT

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
    
}).then(() =>{
    console.log("DB connection succesful")
}).catch((err) =>{
    console.log(err.message)
})

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})
