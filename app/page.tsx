"use client";

import { useQuery } from "@tanstack/react-query";
import { Card } from "./components/Card";
import { Product } from "./components/Card/types";
import * as S from "./styles";

interface ProductList {
  products: Product[];
  count: number;
}

export default function Home() {
  const { data, isLoading } = useQuery<ProductList>({
    queryKey: ["products"],
    queryFn: () =>
      fetch(
        "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC"
      ).then((res) => res.json()),
  });

  {
    if (isLoading || !data) {
      return <S.Container>loading...</S.Container>;
    }
  }

  return (
    <S.Container>
      <S.Grid>
        {data.products.map((product: Product) => (
          <Card key={product.id} product={product} />
        ))}
      </S.Grid>
    </S.Container>
  );
}
