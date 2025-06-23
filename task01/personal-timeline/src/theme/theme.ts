import { typography } from "./defaults/typograpy";
export const theme = {
  typography,
};
export type Theme = typeof theme;
export type ThemeTypographyVariants = keyof typeof typography.variants;
