import { BaseComponent } from "@/theme/BaseComponent";
import { StyleSheet } from "@/theme/StyleSheet";

interface ImageProps {
  src: string;
  alt: string;
  styleSheet?: StyleSheet;
}

export const Image = ({ src, alt,styleSheet, ...props }: ImageProps) => {
  return <BaseComponent as="img" src={src} alt={alt} stylesheet={styleSheet} {...props} />;
};
