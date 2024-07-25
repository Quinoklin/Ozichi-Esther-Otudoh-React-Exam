import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shoe from './Components/Shoe.jsx';
import React from 'react';

function App () {

  return (
    <Router>
      <Routes>
        <Route path ='/' element={<Shoe/>}/>
      </Routes>
    </Router>
  );
}

export default App;