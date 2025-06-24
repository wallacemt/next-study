"use client";
import { Box } from "@/components/Box";

import { Text } from "@/components/Text";
import { useTheme } from "@/theme/ThemeProvider";
import Link from "@/components/Link";
import { Background } from "@/components/home/patterns/Background";
import { Menu } from "@/components/home/patterns/Menu";
import { Feed } from "@/components/home/patterns/Feed";
import { Footer } from "@/components/home/patterns/Footer";

export default function HomeScreen() {
  const theme = useTheme();
  return (
    <Box tag="main" styleSheet={{ backgroundColor: theme.colors.variants.neutral.x300, flex: 1, alignItems: "center" }}>
      <Link href={"/sobre"} variant="display1">Va para a sobre</Link>
      <Background />
      <Menu />
      <Feed>
        <Feed.Header />
        <Text variant="display1">Últimas Atualizações</Text>
        <Feed.Posts />
        <Footer />
      </Feed>
    </Box>
  );
}
