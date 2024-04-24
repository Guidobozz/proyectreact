import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getproducts, getProductsByCategory } from "../services/firebase";
import { Loader } from "../ItemListContainer/loader";
import ProductoCard from "../ItemListContainer/productocard"; 

const Itemlistcontainer = () => {
  const { categoryId } = useParams();
  const [loading, setLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    const fetchProducts = async () => {
      try {
        const products = await getproducts(); 
        if (categoryId) {
          const filtered = products.filter((product) => product.category === categoryId);
          setFilteredProducts(filtered);
        } else {
          setFilteredProducts(products);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [categoryId]);

  if (loading) return <Loader />;

  const handleAddToCart = (product) => {
    console.log('Añadir al carrito:', product);
  };

  return (
    <div className="container">
      <div className="row">
        {filteredProducts.map((product) => (
          <div className="col-md-4" key={product.id}>
            <ProductoCard product={product} onAddToCart={handleAddToCart} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Itemlistcontainer;























/*
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Datacards } from "./datacards";
import { Loader } from "../ItemListContainer/loader";
import ItemList from "./itemlist"; 

const Itemlistcontainer = () => {
  const { categoryId } = useParams();
  const [loading, setLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    if (categoryId) {
      const filtered = Datacards.filter((product) => product.category === categoryId);
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(Datacards);
    }
    setLoading(false); 
  }, [categoryId]);

  if (loading) return <Loader />;

  return (
    <div className="container--cards">
      <ItemList products={filteredProducts} />
    </div>
  );
};

export default Itemlistcontainer; 
*/