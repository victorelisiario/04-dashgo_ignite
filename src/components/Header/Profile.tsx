import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProsp {
  showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProsp) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Victor Elisiário</Text>
          <Text color="gray.300" fontSize="small">
            victorelisiario@hotmail.com</Text>
        </Box>
      )}

      <Avatar size="md" name="Victor Elisiario" src="https://github.com/victorelisiario.png" />
    </Flex>
  );
}