import React from "react";
import { StyleSheet } from "@/theme/StyleSheet";
import { BaseComponent } from "@/theme/BaseComponent";

interface BoxProps {
  styleSheet?: StyleSheet;
  children?: React.ReactNode;
  tag?: "main" | "section" | "article" | "div" | string;
}
export const Box = ({ styleSheet, children, tag, ...props }: BoxProps) => {
  const Tag = tag || "div";
  return (
    <BaseComponent as={Tag} stylesheet={styleSheet || ""} {...props}>
      {children}
    </BaseComponent>
  );
};
