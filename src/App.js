import React from "react";
import NavBar from "./components/navBar";
import Home from "./components/home/home";
import ProductDetails from "./components/productsdetails/productDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/notFound/notFound";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":slug" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
