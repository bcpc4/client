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
      "컴퓨터교육과🖥️",
      "경제학과📈",
      "정치외교학과⚖",
      "환경공학과🌳",
      "통계학과📊",
      "행정학과👩",
      "생명과학과🦠",
      "국어국문학과📚",
      "화학공학과💣️",
      "기계공학과⚒",
      "신소재공학과🗼",
      "더보기",
    ],
    []
  );

  return (
    <Providers>
      <Grid gridTemplateRows="60px auto" h="100vh">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          borderBottom="1px solid"
          borderColor="gray.600"
          px={4}
          w="100%"
        >
          <Box display="flex" justifyContent="center" width="100%"></Box>
        </Box>
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
                src="https://s3-alpha-sig.figma.com/img/36f2/bf36/160168faaf08ffcc83435dcd8e990e2b?Expires=1696204800&Signature=gF3jfvhiQYF-SfqyBjukRGroKl2f9Dy4jnaJeFV0mE67bVsKDVDEFXkYm76szUCa2CE3wOQR8-yC-jmlTy19P2TWh1zpWj6EZ8Vv5QxIj67q65cV6dEzgyGO-zgKAiJbaT5f0pbX2pLET-CENRViQhHzn8vvb5m59G8KqHCZtbNJTYsizWxIIHiCthqndtTqlupch7qnsGFJjFxb4sIdw9lp3j0mLWmdm9-cTVWY9CghnSbJ889APYE6XH1uORH30AhWM3teKvoSs-SliNoW9KQvy8LLPk1IEsBABIURCzAk6ZghIHDPkDWED3o-Mv61qPAnjl~zmOz0sIb8c8IEOQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
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
