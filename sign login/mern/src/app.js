 const express = require("express")
 const path = require("path")
 const app= express()
 const hbs = require("hbs")
 
 
const port = process.env.PORT || 3000
require("./db/conn")
const Register = require("./models/register")
const static_path = path.join(__dirname,"../public")
const templates = path.join(__dirname,"../temp/views")
const partials = path.join(__dirname,"../temp/partials")

app.use(express.static(static_path ))
app.set("view engine", "hbs")
app.set("views",templates)
hbs.registerPartials(partials)

app.use(express.urlencoded({extended:false}))


 app.get("/index" ,(req,res) =>{
     res.render("index")
 })

 app.get("/register" ,(req,res) =>{
    res.render("register")
})

 
app.get("/login" ,(req,res) =>{
    res.render("login")
})


 app.post("/register", async(req,res)=>{
       try {
       

 const post = await Register.create(req.body);
        return res.render("login")

    //  const password= req.body.password
    //  if(password){
      
   
    //   const registernew = new Register({
    //     firstName : req.body.firstname,
    //     lastName : req.body.lastname,
         
    //     email : req.body.email,
    //     number : req.body.number,
    //     password : req.body.password,
    //     company : req.body.company,
    //     quly : req.body.quly,
    //   })
    //   const register = await registernew.save()
    //   res.status(201).render("login")
    // // }
    // // else{
    // //     res.send("no")
    // // }

  
       } catch (error) {
           res.status(400).send(error)
       }
 })

  
  

app.post("/login", async(req,res)=>{
    try {
     const email = req.body.email
     const number = req.body.number
     const password = req.body.password
     
     const Register =await Register.findOne({email:email})
 

     if(Register.password === password){
        res.render("index")
     
       
     }
     else{
        res.send("email or password wrong")
     }

     
    } catch (error) {
        res.status(400).send(error)
    }
})


 app.listen(port, async()=>{
      try {
          await connectDB()
          console.log(`lis${port}`)
      } catch (error) {
          console.log(error)
      }
 })