import { colors } from "./defaults/colors";
import { typography } from "./defaults/typograpy";
export const theme = {
  typography,
  colors,
};
export type Theme = typeof theme;
export type ThemeTypographyVariants = keyof typeof typography.variants;
export type ThemeColorsVariants = keyof typeof colors.variants;