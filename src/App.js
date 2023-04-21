import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "../src/components/pages/Home"
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";

function App() {
    return (
        <>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path='/React-App-Practice/' element={<Home/>}/>
                    <Route path='/React-App-Practice/services' element={<Services/>}/>
                    <Route path='/React-App-Practice/products' element={<Products/>}/>
                    <Route path='/React-App-Practice/sign-up' element={<SignUp/>}/>
                </Routes>
            </Router>
        </>
    );
}

export default App;
