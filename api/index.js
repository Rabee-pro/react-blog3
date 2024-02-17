// "test": "echo \"Error: no test specified\" && exit 1"       insted we are using start in package.json
//   mongodb+srv://rabeee:<password>@cluster0.4j3c1ig.mongodb.net/?retryWrites=true&w=majority
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");

dotenv.config();
app.use(express.json());
mongoose
.connect(process.env.MONGO_URL)
.then(console.log("Connected to MongoDB"))
.catch(err=>console.log(err));
// app.use("/",(req,res)=>{
//     console.log("Hei this is Main url")
// })
app.use("/api/auth", authRoute);

app.listen("5000", ()=>{
    console.log("Backend is running");
})