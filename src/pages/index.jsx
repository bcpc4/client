import { Providers } from "@/app/providers";
import { Box, Button, Center, Flex, Grid, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

export default function Home() {
  const [myMajor, setMyMajor] = useState(null);
  useEffect(() => {
    if (localStorage.getItem("major")) {
      setMyMajor(localStorage.getItem("major"));
    }
  }, []);

  const majors = useMemo(
    () => [
      "컴퓨터",
      "경제",
      "정치외교학과",
      "환경",
      "기업",
      "젠더",
      "반려동물",
      "예술",
      "역사",
      "노동",
      "청소년",
      "가정",
    ],
    []
  );

  return (
    <Providers>
      <Grid gridTemplateRows="60px auto" h="100vh">
        {/* <Header /> */}
        <header>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            borderBottom="1px solid"
            borderColor="gray.600"
            px={4}
            w="100%"
          >
            <Box display="flex" justifyContent="center" width="100%">
              <Image
                w="150px"
                src="https://github-production-user-asset-6210df.s3.amazonaws.com/121784261/270038579-1a0fa218-6aa0-4604-b9f3-55ee1133b58b.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20230922%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230922T193054Z&X-Amz-Expires=300&X-Amz-Signature=694c5998a4be867af625fcdceeeb09a4094b52f6517e844e0f83cee50d0aa438&X-Amz-SignedHeaders=host&actor_id=121784261&key_id=0&repo_id=695155075"
              />
            </Box>
          </Box>
        </header>
        {myMajor ? (
          <Center
            justifyContent="space-around"
            margin="0px 100px"
            marginBottom="100px"
          >
            <Link href="/blank_fill">
              <Center
                background="#164330"
                width="200px"
                height="200px"
                borderRadius="50%"
                border="none"
                color="white"
                cursor="pointer"
                textAlign="center"
              >
                <Text>빈칸 채우기</Text>
              </Center>
            </Link>
            <Link href="/choice_question">
              <Center
                background="#164330"
                width="200px"
                height="200px"
                borderRadius="50%"
                border="none"
                color="white"
                cursor="pointer"
                textAlign="center"
              >
                <Text>객관식 풀기</Text>
              </Center>
            </Link>
            <Link href="/card">
              <Center
                background="#164330"
                width="200px"
                height="200px"
                borderRadius="50%"
                border="none"
                color="white"
                cursor="pointer"
                textAlign="center"
              >
                <Text>카드 맞추기</Text>
              </Center>
            </Link>
            <Link href="/conversation">
              <Center
                background="#164330"
                width="200px"
                height="200px"
                borderRadius="50%"
                border="none"
                color="white"
                cursor="pointer"
                textAlign="center"
              >
                <Text>대화하기</Text>
              </Center>
            </Link>
          </Center>
        ) : (
          <Grid templateRows="1.5fr 2fr" justifyContent="center">
            <Center>
              <Image
                src="https://github-production-user-asset-6210df.s3.amazonaws.com/121784261/270019688-dcda99e6-af59-4ed5-ac87-39bcff5cceb3.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20230922%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230922T180824Z&X-Amz-Expires=300&X-Amz-Signature=0f2ff762c34d73cf2acb10bc3f50fd4b4d9607c259653b37431a5f1e6ddc2c1a&X-Amz-SignedHeaders=host&actor_id=121784261&key_id=0&repo_id=695155075"
                w="300px"
              />
            </Center>
            <Box
              width="100vw"
              display="flex"
              backgroundColor="#164330"
              justifyContent="center"
            >
              <Flex
                justify="center"
                flexWrap="wrap"
                width="800px"
                alignContent="flex-start"
                marginTop="50px"
              >
                {majors.map((m) => (
                  <Button
                    key={m}
                    backgroundColor="white"
                    margin="20px 8px"
                    cursor="pointer"
                    colorScheme="teal"
                    variant="outline"
                    size="lg"
                    onClick={() => {
                      localStorage.setItem("major", m);
                      setMyMajor(m);
                    }}
                  >
                    {m}
                  </Button>
                ))}
              </Flex>
            </Box>
          </Grid>
        )}
      </Grid>
    </Providers>
  );
}
