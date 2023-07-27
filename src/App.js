// import { useState } from "react";
import "./StyleSheets/App.css"
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import Homepage from "./Components/Homepage";
import Empregistration from "./Components/Emp_Registration";
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
const router = createBrowserRouter(createRoutesFromElements(
	<Route path="/" element={<Navbar />}>
		<Route path="/login" element={<Login />} />
		<Route path="/homepage" element={<Homepage />} />
		<Route path="/singup" element={<Empregistration />}></Route>
	</Route>
))
// import {Switch} from "react-router";
const App = () => {
	// const userID = localStorage.getItem("user_id");
	// const defaultscreen = userID ? "Homepage" : "Registration";
	// const [screen, setScreen] = useState(defaultscreen);

	return (
		<>
			<RouterProvider router={router}></RouterProvider>
		</>
	);
}

export default App;
