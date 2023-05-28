import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import OrderForm from "./Components/Form";
import Home from "./Components/Home";
import Conformation from "./Components/Confirmation";
import "./App.css"



const App = () => {


  return (
    <div className="App">
      <nav className="homeNav">
        <h1>Bloomtech</h1>
        <div className="nav-links">
          <Link to='/'>Home</Link>
          <Link to="help">Help</Link>
        </div>
      </nav>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="help" element={''}/>
      <Route path="orderForm" element={<OrderForm/>}/>
      <Route path="Conformation" element={<Conformation/>}/>
    </Routes>
    </div>
  );
};
export default App;
