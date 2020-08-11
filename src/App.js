import React, { Component } from 'react';
import './App.scss';
import Tours from './components/TourList/Tourslist';
import Navbar from '../src/components/Navbar/Navbar';

function App() {
	return (
		<section className="App">
			<Navbar />
			<Tours />
		</section>
	);
}

export default App;
