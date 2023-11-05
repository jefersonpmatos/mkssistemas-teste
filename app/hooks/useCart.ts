"use client";
import { useCallback, useContext, useState } from "react";
import { CartContext, CartContextType } from "../context/CartContext";
import { Product } from "../components/Card/types";

export const useCart = () => {
  const {
    setProducts,
    products,
    isCartOpen,
    openCart,
    closeCart,
    productQuantities,
    setProductQuantities,
  } = useContext<CartContextType>(CartContext);

  const addProduct = (product: Product) => {
    setProducts([...products, product]);
    setProductQuantities({
      ...productQuantities,
      [product.id]: 1,
    });
  };

  const removeProduct = useCallback(
    (product: Product) => {
      setProductQuantities((prevQuantities) => {
        const updatedQuantities = { ...prevQuantities };
        delete updatedQuantities[product.id];
        return updatedQuantities;
      });
      setProducts(products.filter((p) => p.id !== product.id));
    },
    [products, setProductQuantities, setProducts]
  );

  const increaseQuantity = useCallback((product: Product) => {
    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [product.id]: (prevQuantities[product.id] || 0) + 1,
    }));
  }, []);

  const decreasseQuantity = useCallback(
    (product: Product) => {
      setProductQuantities((prevQuantities) => {
        const currentQuantity = prevQuantities[product.id] || 0;

        if (currentQuantity > 1) {
          return {
            ...prevQuantities,
            [product.id]: currentQuantity - 1,
          };
        } else {
          removeProduct(product);
          return prevQuantities;
        }
      });
    },
    [removeProduct]
  );
  const getProductQuantity = (product: Product) => {
    return (productQuantities[product.id] || 1).toString();
  };

  const totalPrice = products.reduce(
    (acc: number, product: Product): number => {
      const quantity = productQuantities[product.id] || 1;
      return acc + parseFloat(product.price) * quantity;
    },
    0
  );

  const totalItems = Object.values(productQuantities).reduce(
    (acc, quantity) => acc + quantity,
    0
  );

  return {
    addProduct,
    removeProduct,
    products,
    totalPrice,
    totalItems,
    isCartOpen,
    openCart,
    closeCart,
    increaseQuantity,
    decreasseQuantity,
    getProductQuantity,
  };
};
