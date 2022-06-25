const mongoose= require("mongoose")

const studentSchma = new mongoose.Schema({
    firstname : {type : String, required:true},
    lastname : {type : String, required:true},
     number : {type :  Number, required:true },
     email : {type : String, required:true ,unique:true},
     password : {type : String, required:true ,unique:true},
     company :   {type : String, required:false  },
     quly  :   {type : String, required:false  },
})


const Register = new mongoose.model("Student", studentSchma)
module.exports=Register



// const loginSchma = new mongoose.Schema({
    
     
//      email : {type : String, required:true ,unique:true},
//      password : {type : String, required:true ,unique:true},
      
// })


// const login = new mongoose.model("login", loginSchma)
// module.exports=login
