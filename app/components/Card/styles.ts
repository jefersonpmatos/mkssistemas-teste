import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 218px;
  height: 285px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.14);
  transition: all 0.3s;
  padding-top: 18px;
`;

export const Image = styled.img`
  height: 138px;
  width: auto;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding: 0 14px;
`;

export const Title = styled.p`
  display: flex;
  align-items: center;
  color: #2c2c2c;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  width: 124px;
`;

export const Description = styled.div`
  color: #2c2c2c;
  font-size: 10px;
  font-style: normal;
  font-weight: 300;
  line-height: 12px;
  padding: 0 14px;
`;

export const Price = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 4px;
  border-radius: 5px;
  background: #373737;
  color: #fff;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 15px; /* 100% */
`;

export const Button = styled.button`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 10px 0;
  border-radius: 0px 0px 8px 8px;
  background: #0f52ba;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;
