const model = require("../models/empModel")


const InsertData = async (req , res)=>{
    let{empno , name , designation , salary} = req.body
    let Data = await model.create({
        empno : empno,
        name : name,
        designation : designation,
        salary : salary
    })
    res.send(Data)
}
const DisplayData = async (req , res)=>{
    let Data =  await model.find(req.body)
    res.send(Data)
}


module.exports = {
    InsertData,
    DisplayData
}