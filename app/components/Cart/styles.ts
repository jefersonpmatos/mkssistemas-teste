import styled from "styled-components";

export const Container = styled.div.attrs<{ $isOpen: string }>((props) => ({
  $isOpen: props.$isOpen,
}))`
  position: fixed;
  top: 0;
  right: 0;
  display: ${(props) => props.$isOpen};
  flex-direction: column;
  justify-content: space-between;
  width: 486px;
  height: 100vh;
  background: #0f52ba;
  box-shadow: -5px 0px 6px 0px rgba(0, 0, 0, 0.13);
  color: #fff;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 36px 47px 0 47px;
`;

export const Title = styled.div`
  font-size: 27px;
  font-weight: 700;
`;

export const CloseButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background-color: #000;
  height: 38px;
  width: 38px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const Balance = styled.div`
  display: flex;
  justify-content: space-between;
  color: #fff;
  font-size: 28px;
  font-weight: 700;
  line-height: 15px;
  padding: 0 47px;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 97px;
  background-color: #000;
  font-size: 28px;
  font-weight: 700;
  line-height: 15px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const Products = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
  padding: 36px 47px 0 47px;
`;

export const Product = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 23px;
  width: 379px;
  height: 95px;
  border-radius: 8px;
  background: #fff;
  box-shadow: -2px 2px 10px 0px rgba(0, 0, 0, 0.05);
  position: relative;
`;

export const Wrapper = styled.div.attrs<{ $flex: string }>((props) => ({
  $flex: props.$flex,
}))`
  display: flex;
  flex-direction: ${(props) => props.$flex};
  gap: 15px;
`;

export const ProdcutImage = styled.img`
  width: 50px;
  height: auto;
`;

export const ProductTitle = styled.div`
  color: #2c2c2c;
  font-size: 13px;
  font-weight: 400;
  line-height: 17px;
  width: 113px;
`;

export const ProductPrice = styled.div`
  color: #000;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  margin-left: 25px;
`;

export const QtyWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: 0.3px solid #bfbfbf;
  background: #ffff;
`;

export const ProdcutQty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
`;

export const PlusButton = styled.div`
  color: #000;
  font-size: 12px;
  font-weight: 400;
  cursor: pointer;
  padding: 8px 12px;
`;
export const MinusButton = styled.div`
  color: #000;
  font-size: 12px;
  font-weight: 400;
  cursor: pointer;
  padding: 8px 12px;
`;

export const RemoveButton = styled.div`
  width: 18px;
  height: 18px;
  background-color: #000;
  border-radius: 100%;
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  display: flex;
  justify-content: center;
  position: absolute;
  top: -5px;
  right: -5px;
  z-index: 10;
  cursor: pointer;
`;
