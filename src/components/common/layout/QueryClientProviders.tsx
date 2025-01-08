"use client";

import { QueryClient, QueryClientConfig, QueryClientProvider as ReactQueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React, { useState } from "react";

/**
 * @doc https://tanstack.com/query/latest/docs/framework/react/guides/ssr
 * */

const queryClientConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 1000,
    },
    mutations: {
      retry: false,
    },
  },
};

export default function QueryClientProvider({ children }: { children: React.ReactNode }) {
  // 함수를 사용하면 초기렌더링시에만 QueryClient가 생성됨.
  const [queryClient] = useState(() => new QueryClient(queryClientConfig));
  return (
    <ReactQueryClientProvider client={queryClient}>
      <>
        {children}
        <ReactQueryDevtools initialIsOpen />
      </>
    </ReactQueryClientProvider>
  );
}
