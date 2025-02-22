"use client";

import { ReactNode, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "@/hooks/useAuth";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme";
import NextTopLoader from "nextjs-toploader";

interface RegistryProps {
  children: ReactNode;
}

export const Registry = ({ children }: RegistryProps) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
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
          <Toaster />
        </body>
      </AuthProvider>
    </QueryClientProvider>
  );
};
