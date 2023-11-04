"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CartProvider } from "../context/CartContext";

const queryClient = new QueryClient();

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <CartProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </CartProvider>
  );
};
