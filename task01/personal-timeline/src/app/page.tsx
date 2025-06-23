import { Box } from "@/components/Box";
import { theme } from "@/theme/theme";
import Image from "next/image";

export default function HomeScreen() {
  return (
    <Box tag="main" styleSheet={{ fontFamily: theme.typography.fontFamily }}>
      Olá
    </Box>
  );
}
