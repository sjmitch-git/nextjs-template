"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "./ThemeContext";
import { UserProvider } from "./UserContext";

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider>
      <UserProvider>{children}</UserProvider>
    </ThemeProvider>
  );
};
