const express = require("express")
const app  = express()
const cors = require("cors")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const empRoute = require("./routes/route")

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended :true}))
app.use("/employees" , empRoute)
mongoose.connect("mongodb://127.0.0.1:27017/CRUD").then((res)=>{console.log("DB Connected")})



app.listen(8080 , ()=>{
    console.log("listening")
})