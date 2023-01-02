import React from "react"; 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Containers/Header"; 
import ProductDetails from "./Containers/ProductDetails";
import ProductListing from "./Containers/ProductListing";
import './App.css';

function App() {
  return (
    <>
    <Router>
    <Header />
    <Routes>
      <Route path="/" index element={<ProductListing />} />
      <Route path="/product/:productId" exact element={<ProductDetails />} />
      <Route>404 Not Found</Route>
    </Routes>
    </Router>
    </>
  );
}

export default App;
