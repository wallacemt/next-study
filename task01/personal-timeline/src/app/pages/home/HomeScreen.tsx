import { Box } from "@/components/Box";
import { Background } from "./patterns/Background";
import { Menu } from "./patterns/Menu";
import { Feed } from "./patterns/Feed";
import { Text } from "@/components/Text";
import { Footer } from "./patterns/Footer";

export default function HomeScreen() {
  return (
    <Box tag="main">
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
