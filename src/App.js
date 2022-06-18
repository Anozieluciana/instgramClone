import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HomeScreen from "./components/Home/HomeScreen";
import Detail from "./components/Home/Deatail"
import Register from "./components/Auth/Register";
const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/' element={<HomeScreen />}/>
				<Route path='/detail' element={<Detail />}/>
				<Route path='/register' element={<Register />}/>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
