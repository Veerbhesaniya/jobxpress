import { useState } from "react";
import "./StyleSheets/App.css"
import Login from "./Components/Login";
import Homepage from "./Components/Homepage";

import Slider from "./Components/Slider";
const App = () => {
	const userID = localStorage.getItem("user_id");
	const defaultscreen = userID ? "Homepage" : "Registration";
	const [screen, setScreen] = useState(defaultscreen);
	const renderScreen = () => {
		switch (screen) {
			case "Login":
				return <Login setScreen={setScreen} screen={screen} />
				break;
			case "Homepage":
				return <Homepage setScreen={setScreen} screen={screen} />;
				break;
			case "Registration":
				return <Slider setScreen={setScreen} screen={screen} />;
				break;
		}
	}
	return (
		<>
			{/* <Slider></Slider>		 */}
			{/* <Empregistration/> */}
			{renderScreen()}
		</>
	);
}

export default App;
