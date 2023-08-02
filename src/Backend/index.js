// To connect with your mongoDB database
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/jobportle', 
	console.log('Connected to yourDB-name database'));

// Schema for users of app
const UserSchema = new mongoose.Schema({
    id : {type : Number , required : true , unique: true},
	education: { type: String, required: true },
    experience: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true  },
    password: { type: String, required: true   ,unique: true},
    email: { type: String, required: true ,unique: true },
    name: { type: String, required: true },
    skills: { type: [String], required: true },
});
const User = mongoose.model('seekers', UserSchema);
User.createIndexes();

// For backend and express
const express = require('express');
const app = express();
const cors = require("cors");
console.log("App listen at port 5000");
app.use(express.json());
app.use(cors());

app.get("/seekers", async (req, resp) => {
    const my = await User.find();
    resp.send(my);
});

app.post("/seekers", async (req, res) => {
	try {
		const user = new User(req.body);
		let result = await user.save();
		// result = result.toObject();
			res.send(result);
			console.log(result);
	} catch (e) {
		res.send("Something Went Wrong");
	}
});
app.listen(5000);
