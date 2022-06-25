const express= require("express")
const mongoose = require("mongoose");
 

const app = express()

app.use(express.json())

const connectDB = () =>{
    return mongoose.connect(
        "mongodb+srv://dhaval:dhaval_123@cluster0.ljuvz.mongodb.net/web14?retryWrites=true&w=majority"
      );
}

// user schma 

const userSchema =  new mongoose.Schema({
    firstname : { type : String , required : true},
    lastname : { type :String , required : false},
    email : {type :String , required :true ,unique : true},
    password :  { type : String , required : true},
})

const User= mongoose.model("user",userSchema)

//post schma 

const postSchema = new mongoose.Schema({
    title : {type : String ,required : true},
    body   : {type : String ,required : true},
    userId : {type : mongoose.Schema.Types.ObjectId ,ref : "user" ,required :true}
},

{
    timestamps : true
}
)
const Post = mongoose.model("post",postSchema)


const commentSchema = new mongoose.Schema({
    body : {type : String ,required : true},
 

postId : { type : mongoose.Schema.Types.ObjectId, ref : "post" ,required : true},
userId : {type : mongoose.Schema.Types.ObjectId ,ref : "user" ,required :true},
},
{
    timestamps : true
}
)

const Comment = mongoose.model("comment",commentSchema)
//crud 

app.get("/users" ,async (req ,res)=>{
   try {

    const users  = await User.find({}).lean().exec()

    return res.status(200).send({users :users})
       
   } catch (error) {
       return res
       .status(200)
       .send({message :"somethig" })
   }
})


app.post("/users" ,async (req ,res)=>{
    try {
 
     const user   = await User.create(req.body)
 
     return res.status(201).send({users :users})
        
    } catch (error) {
        return res
        .status(200)
        .send({message :"somethig" })
    }
 })


 app.get("/users/:id" ,async (req ,res)=>{
    try {
 
     const users  = await User.findById(req.params.id)
 
     return res.status(200).send({users :users})
        
    } catch (error) {
        return res
        .status(200)
        .send({message :"somethig" })
    }
 })


 app.patch("/users/:id" ,async (req ,res)=>{
    try {
 
     const users  = await User.findByIdAndUpdate(req.params.id ,req.body,{
         new : true,
     })
 
     return res.status(200).send({users :users})
        
    } catch (error) {
        return res
        .status(200)
        .send({message :"somethig" })
    }
 })


 app.delete("/users/:id" ,async (req ,res)=>{
    try {
 
     const users  = await User.findByIdAndDelete(req.params.id )
         
     
 
     return res.status(200).send({users :users})
        
    } catch (error) {
        return res
        .status(200)
        .send({message :"somethig" })
    }
 })
///////////////////////////////////////////////////////////
 app.get("/posts" ,async (req ,res)=>{
    try {
 
     const posts  = await Post.find({}).lean().exec()
 
     return res.status(200).send({posts :posts})
        
    } catch (error) {
        return res
        .status(200)
        .send({message :"somethig" })
    }
 })
 


 app.path("/posts" ,async (req ,res)=>{
    try {
 
     const users  = await Post.create(req.params.id ,req.body,{
         new : true,
     })
 
     return res.status(200).send({users :users})
        
    } catch (error) {
        return res
        .status(200)
        .send({message :"somethig" })
    }
 })
 
 app.get("/posts/:id" ,async (req ,res)=>{
    try {
 
     const users  = await Post.findById(req.params.id)
 
     return res.status(200).send({ posts :users})
        
    } catch (error) {
        return res
        .status(200)
        .send({message :"somethig" })
    }
 })
/////////////////////////////////////////////////////////////////////////////////////////////////////
app.listen(5000, async() =>{
    try {
       await connectDB()
    } catch (error) {
        console.log("r")
    }
    console.log("5000")
})



///http://localhost:5000/users

//mongodb://localhost:27017/users`