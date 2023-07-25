const ex = require("express");
const cors = require('cors');
const bodyperser = require("body-parser");
const mongoose = require("mongoose");
const connection = async () =>{
    await mongoose.connect("mongodb://127.0.0.1:27017/demo")
    console.log("Database connected successfully");
}
const docschema = mongoose.Schema( {
    username : String,
    password : String,
    email : String 
}) 
const User  = mongoose.model("employee" , docschema);
connection().then((res)=>{
// console.log(res);
}).catch((Err) =>{
    console.log(Err);
});
const server = ex();
server.use(cors()); 
server.use(bodyperser.json()); 
server.post("/demo", async (req , res) =>{
    // const mydata = User.insertMany({username: req.body.username});
    res.send(req.body);
    console.log(req.body);
})
server.listen(8092 , () => {
    console.log("server started");
})