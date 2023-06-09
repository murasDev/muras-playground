import { FontAwesome } from "@expo/vector-icons";
import { Box, Icon, Text } from "native-base";

type Props = {
  message: string;
  type: "error" | "info" | "success";
};

export function Toast({ message, type }: Props) {
  if (type === "success") {
    return (
      <Box
        alignItems="center"
        flexDir="row"
        bg="green.500"
        px="5"
        py="5"
        rounded="sm"
      >
        <Icon color="white" as={<FontAwesome name="check" />} size={7} mr={4} />
        <Text color="white">{message}</Text>
      </Box>
    );
  }

  return (
    <Box
      alignItems="center"
      flexDir="row"
      bg={type === "error" ? "red.500" : "blue.400"}
      px="5"
      py="5"
      rounded="sm"
    >
      <Icon
        color="white"
        as={<FontAwesome name={type === "error" ? "warning" : "info-circle"} />}
        size={7}
        mr={4}
      />
      <Text color="white">{message}</Text>
    </Box>
  );
}
