import { Button, Flex } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

const LeftNav = () => {
  const router = useRouter();

  return (
    <Flex
      direction="column"
      gap="20px"
      padding="20px 12px"
      w="264px"
      h="calc(100vh - 60px)"
      bg="#164330"
    >
      <Link href="/blank_fill">
        <Button
          bg={router.pathname.slice(1) === "blank_fill" ? "#FFC120" : "white"}
          fontWeight="bold"
          padding="30px"
          width="100%"
          variant="ghost"
          borderRadius="10px"
          color="black"
          _hover={{
            bg:
              router.pathname.slice(1) === "blank_fill"
                ? "yellow.500"
                : "gray.200",
          }}
        >
          빈칸 채우기
        </Button>
        {/* <Box
          bg={router.pathname.slice(1) === "blank_fill" ? "#FFC120" : "white"}
          textAlign="center"
          fontFamily="Roboto"
          fontSize="150px"
          fontStyle="normal"
          fontWeight="700"
          lineHeight="56px"
          width="233px"
          height="56px"
          flexShrink={0}
          borderRadius="10px"
          boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
        >
          빈칸 채우기
        </Box> */}
      </Link>

      <Link href="/choice_question">
        <Button
          bg={
            router.pathname.slice(1) === "choice_question" ? "#FFC120" : "white"
          }
          fontWeight="bold"
          padding="30px"
          width="100%"
          variant="ghost"
          borderRadius="10px"
          color="black"
          _hover={{
            bg:
              router.pathname.slice(1) === "choice_question"
                ? "yellow.500"
                : "gray.200",
          }}
        >
          객관식 풀기
        </Button>
        {/* <Box
          bg={
            router.pathname.slice(1) === "choice_question" ? "#FFC120" : "white"
          }
          textAlign="center"
          fontFamily="Roboto"
          fontSize="15px"
          fontStyle="normal"
          fontWeight="700"
          lineHeight="56px"
          width="233px"
          height="56px"
          flexShrink={0}
          borderRadius="10px"
          boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
        >
          객관식 풀기
        </Box> */}
      </Link>

      <Link href="/card">
        <Button
          bg={router.pathname.slice(1) === "card" ? "#FFC120" : "white"}
          fontWeight="bold"
          padding="30px"
          width="100%"
          variant="ghost"
          borderRadius="10px"
          color="black"
          _hover={{
            bg: router.pathname.slice(1) === "card" ? "yellow.500" : "gray.200",
          }}
        >
          카드 맞추기
        </Button>
        {/* <Box
          bg={router.pathname.slice(1) === "card" ? "#FFC120" : "white"}
          textAlign="center"
          fontFamily="Roboto"
          fontSize="15px"
          fontStyle="normal"
          fontWeight="700"
          lineHeight="56px"
          width="233px"
          height="56px"
          flexShrink={0}
          borderRadius="10px"
          boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
        >
          카드 맞추기
      </Box>*/}
      </Link>
      <Link href="/conversation">
        <Button
          backgroundColor={
            router.pathname.slice(1) === "conversation" ? "#FFC120" : "white"
          }
          fontWeight="bold"
          padding="30px"
          width="100%"
          variant="ghost"
          borderRadius="10px"
          color="black"
          _hover={{
            bg:
              router.pathname.slice(1) === "conversation"
                ? "yellow.500"
                : "gray.200",
          }}
        >
          대화하기
        </Button>

        {/* <Box
          bg={router.pathname.slice(1) === "conversation" ? "#FFC120" : "white"}
          textAlign="center"
          fontFamily="Roboto"
          fontSize="15px"
          fontStyle="normal"
          fontWeight="700"
          lineHeight="56px"
          width="233px"
          height="56px"
          flexShrink={0}
          borderRadius="10px"
          boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
        >
          대화하기
        </Box> */}
      </Link>
    </Flex>
  );
};

export default LeftNav;
