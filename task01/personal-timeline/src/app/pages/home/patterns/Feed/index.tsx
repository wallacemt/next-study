import { Box } from "@/components/Box";
import { Text } from "@/components/Text";

interface FeedProps {
  children: React.ReactNode;
}
export const Feed = ({ children }: FeedProps) => {
  return (
    <Box>
      <Text>Feed Base</Text>
      {children}
    </Box>
  );
};

Feed.Header = () => {
  return (
    <Box>
      <Text>Feed Header</Text>
    </Box>
  );
};

Feed.Posts = () => {
  return (
    <Box>
      <Text>Feed Posts</Text>
    </Box>
  );
};
