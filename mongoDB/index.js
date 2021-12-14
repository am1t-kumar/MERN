// npm init 
// npm i express 
// npm i mongoose 

// connect to your mongo address from cmd 

const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/new",{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("nice connected")}).catch((err)=>{
        console.log(err)
    })

    const student = new mongoose.Schema({
        name:String,
        workout : Boolean,
        height : Number,
    
    })

    const Student = new mongoose.model("student",student);

const adder = async()=>{
     const ss = await Student.create({
        name:"amit",
        workout:true,
        height:6
    })
    
    await ss.save();
}

adder();

