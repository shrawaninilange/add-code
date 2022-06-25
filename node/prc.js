const express =require("express")
const mongoose = require("mongoose")
const  { body ,validator } = require('express-validator')
const app = express()

const connectDB = ()=>{
     mongoose.connect("mongodb://localhost:27017/users")
}


const userSchema = mongoose.Schema({

    id : {type :Number, required: false},
    first_name : String,
        last_name : String,
        email : String,
        gender : String,
        password : String,
        ip_address : String,
})

const User = mongoose.model("user",userSchema)

app.get("/user", body("id").isLength({min :1 }),
                 body("fisrt_name").isLength({min :3}),
        async(req,res)=>{
    const userData =  await User.find({}).lean().exec()
    return res.send(userData)
})

// app.listen(2000, async()  => {
//     try {
//         await connectDB()
        
//     } catch (error) {
//         console.log("error")
//     }

//     console.log("listening at 2000")
// })