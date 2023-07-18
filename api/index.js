const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const conversationRoute = require("./routes/conversations");
const messageRoute = require("./routes/messages");
const multer = require("multer");
const path = require("path");


dotenv.config();
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URL,
  { useNewUrlParser: true,
    useUnifiedTopology: true 
 }).then(() =>{
    console.log(`connection successful`);
 }).catch((err) => console.log(`no connection`,err))
  


 app.use("/images",express.static(path.join(__dirname,"public/images")));


//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

const storage = multer.diskStorage({
  destination:(req,file,cb) => {
    cb(null,"public/images");
  },
  filename: (req,file,cb) => {
    cb(null,req.body.name);
  },
});

const upload = multer({storage});
app.post("/api/upload",upload.single("file"), (req,res)=>{
  try{
    return res.status(200).json("File uploaded successfully");
  }
  catch(err){
    console.log(err)
  }
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/conversations",conversationRoute);
app.use("/api/messages",messageRoute);


app.listen(8800, () => {
  console.log("Backend server is running!");
});