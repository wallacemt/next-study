import NextLink from "next/link";
import { Text } from "../Text";
import React from "react";
import { StyleSheet } from "@/theme/StyleSheet";
import { ThemeColorsVariants, ThemeTypographyVariants } from "@/theme/theme";
import { useTheme } from "@/theme/ThemeProvider";
interface LinkProps {
  href: string;
  children: React.ReactNode;
  styleSheet?: StyleSheet;
  variant?: ThemeTypographyVariants;
  colorVariant?: ThemeColorsVariants;
}
export default function Link({ href, children, colorVariant = "neutral", styleSheet, ...props }: LinkProps) {
  const isInternalLink = href.startsWith("http");
  const theme = useTheme();
  const currentColorSet = {
    color: theme.colors.variants[colorVariant].x500,
    hover: {
      color: theme.colors.variants[colorVariant].x200,
    },
    focus: {
      color: theme.colors.variants[colorVariant].x600,
    },
  };
  const linkProps = {
    href,
    children,
    tag: "a",
    stylesheet: {
      color: currentColorSet.color,
    },
    hover: {
      ...styleSheet?.hover,
      color: currentColorSet.hover.color,
    },
    focus: {
      ...styleSheet?.focus,
      color: currentColorSet.focus.color,
    },
    ...props,
  };

  if (isInternalLink) return <Text {...{ target: "_blank", ...linkProps }}>{children}</Text>;
  return (
    <NextLink href={href} passHref>
      <Text {...linkProps}>{children}</Text>
    </NextLink>
  );
}

Link.defaultProps = {
  colorVariant: "neutral",
};
