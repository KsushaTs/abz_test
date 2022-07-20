import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

const RoutesApp = () => {
	return (
	  <Routes>
			<Route path="/" element={<Home />} />
			<Route path="/users/*" element={<Home />} />
	  </Routes>
	);
 };
 
 export default RoutesApp;
