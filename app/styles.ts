import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  min-height: 100vh;
`;

export const Grid = styled.div`
  display: grid;
  align-content: center;
  justify-content: center;
  gap: 20px;
  padding: 2.5rem 0;
  grid-template-columns: repeat(1, 1fr);

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    padding: 0;
  }
`;
