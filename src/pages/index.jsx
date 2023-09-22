import { Providers } from '@/app/providers';
import { Box, Center, Grid, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';

export default function Home() {
  const [myMajor, setMyMajor] = useState(null);
  useEffect(() => {
    if (localStorage.getItem('major')) {
      setMyMajor(localStorage.getItem('major'));
    }
  }, []);

  const majors = useMemo(
    () => [
      '컴퓨터',
      '경제',
      '정치외교학과',
      '환경',
      '기업',
      '젠더',
      '반려동물',
      '예술',
      '역사',
      '노동',
      '청소년',
      '가정',
    ],
    []
  );

  return (
    <Providers>
      <Grid gridTemplateRows='60px auto' h='100vh'>
        <Box borderBottom='1px solid' borderColor='gray.600'>
          헤더 있는 곳
        </Box>
        {myMajor ? (
          <Center justifyContent='space-around'>
            <Link href='/blank_fill'>
              <Center
                w='200px'
                h='200px'
                borderRadius='100px'
                bg='green.100'
                cursor='pointer'
              >
                <Text fontSize='2xl'>빈칸 채우기</Text>
              </Center>
            </Link>
            <Link href='/choice_question'>
              <Center
                w='200px'
                h='200px'
                borderRadius='100px'
                bg='green.100'
                cursor='pointer'
              >
                <Text fontSize='2xl'>객관식 풀기</Text>
              </Center>
            </Link>
            <Link href='/card'>
              <Center
                w='200px'
                h='200px'
                borderRadius='100px'
                bg='green.100'
                cursor='pointer'
              >
                <Text fontSize='2xl'>카드 맞추기</Text>
              </Center>
            </Link>
            <Link href='/conversation'>
              <Center
                w='200px'
                h='200px'
                borderRadius='100px'
                bg='green.100'
                cursor='pointer'
              >
                <Text fontSize='2xl'>대화 하기</Text>
              </Center>
            </Link>
          </Center>
        ) : (
          <Grid templateRows='1fr 1fr'>
            <Box>로고 있는 곳</Box>
            <Box>
              {majors.map((m) => (
                <Box
                  key={m}
                  cursor='pointer'
                  onClick={() => {
                    localStorage.setItem('major', m);
                    setMyMajor(m);
                  }}
                >
                  {m}
                </Box>
              ))}
            </Box>
          </Grid>
        )}
      </Grid>
    </Providers>
  );
}
