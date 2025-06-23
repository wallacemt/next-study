import { Box } from "@/components/Box";
import { Text } from "@/components/Text";
import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

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
      <FaYoutube size={24} />
      <FaInstagram size={24} />
      <FaGithub size={24} />
      <FaLinkedin size={24} />
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
