import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from "./pages/Home";

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Router>
          <Routes path='./pages/Home.jsx' element={<Home/>}/>
        </Router>
      </BrowserRouter>
    </>
  )
}

export default App
