import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Datacards } from "./datacards"; 
import  ItemDetail  from "../ItemListContainer/itemdetail";
import { Loader } from "./loader";

const ItemDetailContainer = () => {
  const { idItem } = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
     
      try {
        
        const foundProduct = Datacards.find((item) => item.id === parseInt(idItem));
        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          console.error("Producto no encontrado");
        }
      } catch (error) {
        console.error("Error al recuperar el producto:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [idItem]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div>
          {product ? (
            <ItemDetail prod={product} />
          ) : (
            <p>No se encontró el producto con el ID especificado</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ItemDetailContainer;


