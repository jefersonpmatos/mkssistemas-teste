import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  height: 101px;
  flex-shrink: 0;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: #0f52ba;
  padding: 0 88px;
`;

export const Title = styled.div`
  display: flex;
  gap: 10px;
  color: #fff;
`;

export const Acronym = styled.h1`
  font-size: 40px;
  font-weight: 600;
  line-height: 19px;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 300;
  line-height: 19px;
`;

export const Button = styled.button`
  all: unset;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 45px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #fff;
  color: #000000;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
`;
