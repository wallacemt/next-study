"use client";
import React from "react";
import { ThemeProvider as StyledThemeProvider, useTheme as useStyledTheme } from "styled-components";
import { theme, Theme } from "./theme";

export const useTheme = (): Theme => {
  return useStyledTheme() as Theme;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
}
