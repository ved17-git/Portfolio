'use client'
import React from "react";
import { ThemeProvider } from "next-themes";
import { NextUIProvider } from "@nextui-org/react";

function Provider({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
        <NextUIProvider>
          {children}
        </NextUIProvider>
      </ThemeProvider>
    </div>
  );
}

export default Provider;