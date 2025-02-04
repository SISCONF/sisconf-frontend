import type { Metadata } from "next/types";
import NextTopLoader from "nextjs-toploader";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NextTopLoader color="#fff" showSpinner={false} />
      {children}
    </>
  );
}
