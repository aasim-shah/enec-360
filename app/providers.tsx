"use client";
import { ThemeProvider } from "next-themes";
import React from "react";

const Providers = ({ children }: any) => {
  return (
    <div>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
    </div>
  );
};

export default Providers;
