"use client";
import { ThemeTypographyVariants } from "@/theme/theme";
import { Box } from "../Box";
import { StyleSheet } from "@/theme/StyleSheet";
import { useTheme } from "@/theme/ThemeProvider";

interface TextProps {
  variant?: ThemeTypographyVariants;
  tag?: "p" | "li" | "h1" | string;
  children?: React.ReactNode;
  styleSheet?: StyleSheet;
}

export const Text = ({ styleSheet, variant, ...props }: TextProps) => {
  const theme = useTheme();
  const textVariant = theme.typography.variants[variant || "body2"];
  return <Box styleSheet={{ fontFamily: theme.typography.fontFamily, ...textVariant, ...styleSheet }} {...props} />;
};

Text.defaultProps = {
  tag: "p",
  variant: "body2",
};
