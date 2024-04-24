import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import ItemDetailContainer from './ItemListContainer/itemdetailcontainer';
import Navbar from './Navbar/navbar';
import "./ItemListContainer/card.css";
import { CartProvider } from './Carrito/cartcontext';
import Footer from './footer/footer'; 
import MediosPago from './footer/medios';
import Cambio from './footer/cambio';
import FAQ from './footer/faq';
import Contacto from './footer/contacto';
import Itemlistcontainer from './ItemListContainer/itemlistcontainer';
import CarritoContenido from './Carrito/carritocontenido';
import ItemCount from './ItemListContainer/itemcount';
import CheckoutForm from './checkout/checkoutform';


function App() {

  return (
    <CartProvider>
    <BrowserRouter> 
      <Navbar />
      <Routes>
        <Route path="/" element={<Itemlistcontainer greeting="Bienvenidos" />} /> 
        <Route path="/category/:categoryId" element={<Itemlistcontainer />} />
        <Route path="/item" element={<ItemDetailContainer />} />
        <Route path="/carrito" element={<CarritoContenido />} />
        <Route path="/product/:productId" element={<ItemCount />} />
        <Route path="/medios" element={<MediosPago />} /> 
        <Route path="/Cambio" element={<Cambio />} /> 
        <Route path="/contacto" element={<Contacto />} /> 
        <Route path="/checkout" element={<CheckoutForm />} /> 
        <Route path="/FAQ" element={<FAQ />} /> 
        <Route path="*" element={<h1>Error 404</h1>} />
      </Routes>
      <Footer /> 
    </BrowserRouter>
  </CartProvider>
  );
}

export default App;
