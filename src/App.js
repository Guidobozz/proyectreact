import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import ItemDetailContainer from './ItemListContainer/itemdetailcontainer';
import Navbar from './Navbar/navbar';
import "./ItemListContainer/card.css";
import { CartProvider } from './Carrito/cartcontext';
import ProductoDetail from './ItemListContainer/productodetail'; 
import Itemlistcontainer from './ItemListContainer/itemlistcontainer';
import CarritoContenido from './Carrito/carritocontenido';


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
        <Route path="/product/:productId" element={<ProductoDetail />} />
        <Route path="*" element={<h1>Error 404</h1>} />
      </Routes>
    </BrowserRouter>
  </CartProvider>
  );
}

export default App;
