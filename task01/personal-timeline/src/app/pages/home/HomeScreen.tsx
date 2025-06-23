"use client";
import { Box } from "@/components/Box";
import { Background } from "./patterns/Background";
import { Menu } from "./patterns/Menu";
import { Feed } from "./patterns/Feed";
import { Text } from "@/components/Text";
import { Footer } from "./patterns/Footer";
import { useTheme } from "@/theme/ThemeProvider";

export default function HomeScreen() {
  const theme = useTheme();
  return (
    <Box tag="main" styleSheet={{backgroundColor: theme.colors.neutral.x300, flex: 1, alignItems: "center"}}>
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
