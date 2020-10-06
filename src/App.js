import React from 'react';
import './App.css';
import NavBar from './components/Navbar'
import {BrowserRouter} from 'react-router-dom'
import Game from './components/screen/Game';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Game/>
    </BrowserRouter>
  );
}

export default App;