"use client";
import { ThemeTypographyVariants } from "@/theme/theme";
import { Box } from "../Box";
import { StyleSheet } from "@/theme/StyleSheet";
import { useTheme } from "@/theme/ThemeProvider";
import { BaseComponent } from "@/theme/BaseComponent";

interface TextProps {
  variant?: ThemeTypographyVariants;
  tag?: "p" | "li" | "h1" | "h2" | string;
  children?: React.ReactNode;
  styleSheet?: StyleSheet;
}

export const Text = ({ styleSheet, variant, tag, ...props }: TextProps) => {
  const theme = useTheme();
  const textVariant = theme.typography.variants[variant || "body2"];
  return (
    <BaseComponent
      as={tag}
      styleSheet={{ fontFamily: theme.typography.fontFamily, ...textVariant, ...styleSheet }}
      {...props}
    />
  );
};

Text.defaultProps = {
  tag: "p",
  variant: "body2",
};
