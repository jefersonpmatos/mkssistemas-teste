import { useContext } from "react";
import { CartContext } from "@/app/context/CartContext";
import * as S from "./styles";
import { Product } from "./types";
import { useCart } from "@/app/hooks/useCart";

type CardProps = {
  product: Product;
};

export const Card: React.FC<CardProps> = ({ product }) => {
  const { addProduct, openCart, increaseQuantity } = useCart();

  return (
    <S.Container>
      <S.Image src={product.photo} />

      <S.Content>
        <S.Title>{product.name}</S.Title>
        <S.Price>R${product.price.slice(0, -3)}</S.Price>
      </S.Content>

      <S.Description>{product.description}</S.Description>

      <S.Button
        onClick={() => {
          addProduct(product);
          openCart();
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="16"
          viewBox="0 0 14 16"
          fill="none"
        >
          <path
            opacity="0.737212"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3 1L1 3.7V13.15C1 13.8956 1.59695 14.5 2.33333 14.5H11.6667C12.403 14.5 13 13.8956 13 13.15V3.7L11 1H3Z"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            opacity="0.737212"
            d="M1 4.375H13"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            opacity="0.737212"
            d="M10 7C10 8.24264 8.82475 9.25 7.375 9.25C5.92525 9.25 4.75 8.24264 4.75 7"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Comprar
      </S.Button>
    </S.Container>
  );
};
