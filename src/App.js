import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Routes from "./Routes";

function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes/>
        </BrowserRouter>
    </div>
  );
}

export default App;
