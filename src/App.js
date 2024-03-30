import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Router, Route } from 'react-router-dom';
import React from 'react';
import Cards from './ItemListContainer/cards';
import CardsData from '../src/ItemListContainer/cardsdata';
import ItemDetailContainer from './ItemListContainer/itemdetailcontainer';
import Navbar from './Navbar/navbar';
import Itemlistcontainer from './ItemListContainer/itemlistcontainer';


function App() {
  return (
    <div>
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Itemlistcontainer greeting={"Bienvenidos"} />
                <Cards />
              </>
            }
          />
          <Route path="/category/:categoryId" element={<Itemlistcontainer />} />
          <Route path="/item" element={<ItemDetailContainer />} />
          <Route path="*" element={<h1>Error 404</h1>} />
        </Routes>
      </BrowserRouter>
  </div>
  );
}

export default App;
