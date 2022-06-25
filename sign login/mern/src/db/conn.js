const mongoose = require("mongoose")

module.exports =connectDB = () => {
    //mongodb url
//  return mongoose.connect("mongodb://localhost:27017/pro")
 return mongoose.connect("mongodb+srv://shrawani:shrawani@cluster0.y0k3g.mongodb.net/resgister?retryWrites=true&w=majority")
}
  

// const db = "mongodb+srv://shrawani:shrawani@cluster0.y0k3g.mongodb.net/resgister?retryWrites=true&w=majority"
