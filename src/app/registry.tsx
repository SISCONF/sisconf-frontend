"use client";

import { ThemeProvider } from "@/components/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NextTopLoader from "nextjs-toploader";
import { ReactNode, useState } from "react";

interface RegistryProps {
  children: ReactNode;
}

export const Registry = ({ children }: RegistryProps) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextTopLoader color="#fff" showSpinner={false} />
          {children}
        </ThemeProvider>
      </body>
    </QueryClientProvider>
  );
};
