const express = require("express")
const mongoose = require("mongoose")
const  { body ,validator } = require('express-validator')

 const app = express()

 const connectDB = () =>{
     mongoose.connect("mongodb://localhost:27017/users")
 }

//mongodb://localhost:27017/users
  
    const userSchema = mongoose.Schema({

        id : {type :Number, required: false},
        first_name : String,
        last_name : String,
        email : String,
        gender : String,
        password : String,
        ip_address : String,
    },

    {
        versionKey: false,
        timestamps: true, // createdAt, updatedAt
      }
    
    )
    
 

 const User = mongoose.model("user", userSchema)

 




app.get("/users" ,
body("id").isLength({min :1 }),
                 body("fisrt_name").isLength({min :3}), async(req,res) =>{
    const userData = await User.find({}).lean().exec()
    return res.send(userData)
})

app.post("/users",  
                   async (req, res) => {
    try {
      const user = await User.create(req.body);
  
      return res.status(201).send(user);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
 
  });
  
 
app.listen(5000, async() =>{
    try {
        await  connectDB()
    } catch  {
        console.log("someting went wrong")
    }
     console.log("listening at 5000")
})



// //mongodb+srv://shrawaninilange:<password>@cluster0.lij06.mongodb.net/myFirstDatabase?retryWrites=true&w=majority




// mongodb+srv://shrawaninilange:<password>@cluster0.lij06.mongodb.net/myFirstDatabase?retryWrites=true&w=majority


// YaefibMRwPHr7A:

//mongodb+srv://shrawaninilange:<password>@cluster0.lij06.mongodb.net/test