const express = require("express")
const route = express.Router()
const empController = require("../controller/empController")


route.post('/empdata' , empController.InsertData)
route.get("/display" , empController.DisplayData)




module.exports = route