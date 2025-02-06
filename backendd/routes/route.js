const express = require("express")
const route = express.Router()
const empController = require("../controller/empController")


route.post('/empdata' , empController.InsertData)
route.get("/display" , empController.DisplayData)
route.post("/search" , empController.searchData)
route.get("/empdelete" , empController.deleteData)
route.post("/getdata" , empController.getData)
route.post("/updatedata" , empController.updateData)








module.exports = route