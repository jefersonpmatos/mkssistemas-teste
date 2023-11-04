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
}

export const CartContext = createContext<CartContextType>({
  setProducts: () => {},
  products: [],
  openCart: () => {},
  closeCart: () => {},
  isCartOpen: false,
});

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);

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
  };

  return (
    <CartContext.Provider value={globals}>{children}</CartContext.Provider>
  );
};
