import { Box, Button, Center, Flex, Grid } from "@chakra-ui/react";

export default function Home() {
  const options = ["빈칸", "짝맞추기", "회화", "객관식"];
  return (
    <providers>
      <Grid gridTemplateRows="60px auto" h="100vh">
        <Box borderBottom="1px solid" borderColor="gray.600">
          헤더 있는 곳
        </Box>
        <Flex justify="space-evenly" alignItems="center" height="100vh">
          {options.map((label) => (
            <Button
              background="#164330"
              key={label}
              width="15vw"
              height="15vw"
              borderRadius="50%"
              border="none"
              color="white"
            >
              {label}
            </Button>
          ))}
        </Flex>
      </Grid>
    </providers>
  );
}
