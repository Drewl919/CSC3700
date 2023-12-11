import './App.css';
import NavBar from "./NavBar";
import {Route, Routes} from "react-router-dom";
import React from "react";
import Home from "./Home";
import NotFound from "./NotFound";
import Products from "./Products";
import ProductDetails from "./ProductDetails";


function App() {
  return (
    <div>
        <NavBar/>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/products' element={<Products/>}>
                <Route path=':id' element={<ProductDetails/>} />
            </Route>
            <Route path='*' element={<NotFound/>}></Route>

        </Routes>
    </div>
  );
}

export default App;
