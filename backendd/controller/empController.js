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
const searchData = async (req , res)=>{
    const { empno } = req.body;
    let Data =await model.find({empno : empno})
    res.send(Data)
    
}
const deleteData = async(req  ,res)=>{
    const {empid} = req.query
    let Data = await model.findByIdAndDelete(empid)
    res.send(Data)
}
const getData = async(req , res)=>{
    const {empid} = req.body
    let Data = await model.findById(empid)
    res.send(Data)
}
const updateData = async(req , res)=>{
    const {_id} = req.body
    await model.findByIdAndUpdate(_id , req.body)
}

module.exports = {
    InsertData,
    DisplayData,
    searchData,
    deleteData,
    getData,
    updateData
}