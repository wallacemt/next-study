import { Box } from "@/components/Box";
import { Image } from "@/components/Image";
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
      <Image
        src="https://github.com/wallacemt.png"
        alt="Imagem de perfil do usuário"
        styleSheet={{ width: "128px", height: "128px", borderRadius: "100%" }}
      />
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
