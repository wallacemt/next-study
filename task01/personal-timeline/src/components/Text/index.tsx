import { theme } from "@/theme/theme";
import { Box } from "../Box";

interface TextProps {
  tag: "p" | "li" | "h1" | string;
  children: React.ReactNode;
}

export const Text = ({ ...props }: TextProps) => {
  return <Box styleSheet={{ fontFamily: theme.typography.fontFamily }} {...props} />;
};

Text.defaultProps = {
  tag: "p",
};
