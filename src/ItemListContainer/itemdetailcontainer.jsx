import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOneProducts } from "../services/firebase"; 
import ItemDetail from "../ItemListContainer/itemdetail";
import { Loader } from "./loader";

const ItemDetailContainer = () => {
  const { idItem } = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);

      try {
        const productData = await getOneProducts(idItem);
        if (productData) {
          setProduct(productData);
        } else {
        }
      } catch (error) {
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


