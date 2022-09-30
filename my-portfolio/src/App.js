import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';

import Home from './components/Home'
import Works from './components/Works'
import Nav from './components/Nav'
import Footer from './components/Footer'

function App() {
  return (
		<div className="main">
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
		</div>
  );
}

export default App;
