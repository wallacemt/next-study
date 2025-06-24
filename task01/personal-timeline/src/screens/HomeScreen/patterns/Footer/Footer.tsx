import Box from "@src/components/Box/Box";
import Text from "@src/components/Text/Text";
import { useTheme } from "@src/theme/ThemeProvider";

export default function Footer() {
  const theme = useTheme();
  return (
    <Box
      styleSheet={{
        backgroundColor: theme.colors.neutral.x900,
        color: theme.colors.neutral.x000,
        width: '100%',
        height: '2rem',
        paddingHorizontal: '24px',
        paddingVertical: '24px',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <Text variant="body2">
        &copy; {new Date().getFullYear()} Wallace - Todos os direitos reservados
      </Text>
    </Box>
  )
}
