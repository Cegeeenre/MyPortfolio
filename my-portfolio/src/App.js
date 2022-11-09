import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';

import Home from './components/HomePage/Home';
import Works from './components/Works/Works'
import Nav from './components/Nav/Nav'
import Error404 from "./components/ErrorPage/Error404";
import ThemeContextProvider from "./Context/ThemeContext";

function App() {
  return (
		<div className="main">
			<ThemeContextProvider>
				<BrowserRouter>
					<div className="container">
						<Nav/>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/works" element={<Works />} />
							<Route path="*" element={<Error404 />} />
						</Routes>
					</div>
				</BrowserRouter>
			</ThemeContextProvider>
		</div>
  );
}

export default App;
