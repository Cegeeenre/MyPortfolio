import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';

import Home from './components/Home'
import Works from './components/Works'
import Nav from './components/Nav'
import Footer from './components/Footer'
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
						</Routes>
						<Footer />
					</div>
				</BrowserRouter>
			</ThemeContextProvider>
		</div>
  );
}

export default App;
