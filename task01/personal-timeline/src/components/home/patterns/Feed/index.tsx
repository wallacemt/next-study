import { Box } from "@/components/Box";
import { Image } from "@/components/Image";
import Link from "@/components/Link";
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
      <Link href="https://github.com/wallacemt" colorVariant="primary">
        <FaGithub size={24} />
      </Link>
      <FaYoutube size={24} />
      <FaInstagram size={24} />
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
