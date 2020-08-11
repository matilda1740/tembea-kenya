import React, { Component } from 'react';
import './App.scss';
import Tours from './components/TourList/Tourslist'
import Navbar from '../src/components/Navbar/Navbar'
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <section className="App">
      <Navbar />
      <Tours />
    </section>
  );
}

export default App;
