import * as S from "./styles";
import { useCart } from "@/app/hooks/useCart";

export type CartProps = {
  isCartOpen: boolean;
  setIsCartOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};
export const Cart = () => {
  const {
    products,
    totalPrice,
    totalItems,
    removeProduct,
    closeCart,
    isCartOpen,
    increaseQuantity,
    decreasseQuantity,
    getProductQuantity,
  } = useCart();

  return (
    <S.Container $isOpen={isCartOpen ? "flex" : "none"}>
      <S.Wrapper $flex="column">
        <S.Header>
          <S.Title>
            Carrinho <br /> de compras
          </S.Title>
          <S.CloseButton onClick={closeCart}>X</S.CloseButton>
        </S.Header>

        <S.Products>
          {products.map((product) => {
            const quantity = getProductQuantity(product);

            return (
              <S.Product key={product.id}>
                <S.RemoveButton onClick={() => removeProduct(product)}>
                  x
                </S.RemoveButton>
                <S.ProdcutImage src={product.photo} />
                <S.ProductTitle>{product.name}</S.ProductTitle>

                <S.QtyWrapper>
                  <S.MinusButton onClick={() => decreasseQuantity(product)}>
                    -
                  </S.MinusButton>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2"
                    height="12"
                    viewBox="0 0 2 12"
                    fill="none"
                  >
                    <path d="M1 0V11.5" stroke="#BFBFBF" stroke-width="0.2" />
                  </svg>

                  <S.ProdcutQty>{quantity}</S.ProdcutQty>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2"
                    height="12"
                    viewBox="0 0 2 12"
                    fill="none"
                  >
                    <path d="M1 0V11.5" stroke="#BFBFBF" stroke-width="0.2" />
                  </svg>
                  <S.PlusButton onClick={() => increaseQuantity(product)}>
                    +
                  </S.PlusButton>
                </S.QtyWrapper>
                <S.ProductPrice>{product.price}</S.ProductPrice>
              </S.Product>
            );
          })}
        </S.Products>
      </S.Wrapper>

      <S.Wrapper $flex="column">
        <S.Balance>
          Total: <span>R$ {totalPrice}</span>
        </S.Balance>
        <S.Button>Finalizar compra</S.Button>
      </S.Wrapper>
    </S.Container>
  );
};
