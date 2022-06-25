const express = require("express")
const mongoose = require("mongoose")
const app = express()
app.use(express.json());
const connectDB = () =>{
    return mongoose.connect("mongodb://localhost:27017/evaluation")
       
     
}



const userSchema  =  new mongoose.Schema({
   
    firstName: { type : String , required : true},
    lastName : { type :String , required : false},
    gender : {type :String , required :true ,unique : true},
    dateOfBirth :  { type : Number , required : true},
}
,{
    versionKey: false,
    timestamps: true, // createdAt, updatedAt
  })

const User= mongoose.model("users",userSchema)


const studentSchema =  new mongoose.Schema({
   roll_id : { type : Number , required : true},
   current_Batch : { type :String , required : false},
   body: { type: String, required: true },
   userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
     
},{
    versionKey: false,
    timestamps: true, // createdAt, updatedAt
  })



const Student= mongoose.model("student",studentSchema)


const BatchSchema =  new mongoose.Schema({
   
    
   body: { type: String, required: true },
   studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "student",
    required: true,
  },

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
     
},{
    versionKey: false,
    timestamps: true, // createdAt, updatedAt
  })


  const batch= mongoose.model("batches",BatchSchema)

////////////////////////////////////////////
  const evaluationSchema  =  new mongoose.Schema({
   
    date_of_evaluation: { type : Date , required : true},
    instructor : { type :String , required : false},
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "student",
      required: true,
    },
     
}
,{
    versionKey: false,
    timestamps: true, // createdAt, updatedAt
  })

const evaluation = mongoose.model("evaluation",evaluationSchema)


  app.get("/users", async (req, res) => {
    try {
      const data = await User.find().lean().exec();
  
      return res.status(200).send(data); // []
    } catch (err) {
      return res
        .status(500)
        .send({ message: "Something went wrong .. try again later" });
    }
  });

  app.get("/students", async (req, res) => {
    try {
      const data = await Student.find().lean().exec();
  
      return res.status(200).send(data); // []
    } catch (err) {
      return res
        .status(500)
        .send({ message: "Something went wrong .. try again later" });
    }
  });


  app.get("/students/:id", async (req, res) => {
    try {
      const user = await Student.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
        .lean()
        .exec();
      // db.users.update({_id: Object('622893471b0065f917d24a38')}, {$set: {req.body}})
  
      return res.status(200).send(user);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });


  app.get("/batches", async (req, res) => {
    try {
      const data = await batch.find().lean().exec();
  
      return res.status(200).send(data); // []
    } catch (err) {
      return res
        .status(500)
        .send({ message: "Something went wrong .. try again later" });
    }
  });

  app.listen(2000,async() =>{
      try {
      await  connectDB()
      } catch (error) {
          console.log(error)
      }
      console.log("2000")
  })
 