"use client";

import React, {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { Product } from "../components/Card/types";

export interface CartContextType {
  setProducts: Dispatch<SetStateAction<Product[]>>;
  products: Product[];
  openCart: () => void;
  closeCart: () => void;
  isCartOpen: boolean;
  productQuantities: { [key: string]: number };
  setProductQuantities: React.Dispatch<
    React.SetStateAction<{ [key: string]: number }>
  >;
}

export const CartContext = createContext<CartContextType>({
  setProducts: () => {},
  products: [],
  openCart: () => {},
  closeCart: () => {},
  isCartOpen: false,
  productQuantities: {},
  setProductQuantities: () => {},
});

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [productQuantities, setProductQuantities] = useState<{
    [productId: number]: number;
  }>({});

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const globals: CartContextType = {
    setProducts,
    products,
    isCartOpen,
    openCart,
    closeCart,
    productQuantities,
    setProductQuantities,
  };

  return (
    <CartContext.Provider value={globals}>{children}</CartContext.Provider>
  );
};
