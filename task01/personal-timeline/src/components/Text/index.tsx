import { theme } from "@/theme/theme";
import { Box } from "../Box";
import { StyleSheet } from "@/theme/StyleSheet";

interface TextProps {
  variant?: "display1";
  tag?: "p" | "li" | "h1" | string;
  children?: React.ReactNode;
  styleSheet?: StyleSheet;
}

export const Text = ({ styleSheet, variant, ...props }: TextProps) => {
  const textVariant = theme.typography.variants[variant || "body2"];
  return (
    <Box styleSheet={{ fontFamily: theme.typography.fontFamily, ...textVariant, ...styleSheet }} {...props} />
  );
};

Text.defaultProps = {
  tag: "p",
  variant: "body2",
};
