import Home from "./pages/home/Home"
import './App.css'
import Cart from "./pages/cart/Cart"
import Checkout from "./pages/checkout/Checkout"
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from "./components/ScrollToTop";


const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Checkout />} />
        <Route path="/checkout" element={<Cart />} />
      </Routes>
    </Router>
  )
}

export default App