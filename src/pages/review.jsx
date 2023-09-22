import { Providers } from '@/app/providers';
import Header from '@/components/Header';
import LeftNav from '@/components/LeftNav';
import RightNav from '@/components/RightNav';
import { Box, Flex, Grid, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

function Review(props) {
  const question = props.question;
  const [selectedIdx, setSelectedIdx] = useState(undefined);

  return (
    <Box
      bg={
        selectedIdx !== undefined && selectedIdx + 1 !== question.answer
          ? 'red.100'
          : 'white'
      }
      p='8px 12px'
      borderRadius='12px'
    >
      <Text fontSize='20px' fontWeight='bold' mb='8px'>
        {question.question}
      </Text>
      {question.choices.map((c, cIdx) => (
        <Text
          fontSize='18px'
          key={cIdx}
          border='1px solid'
          borderColor={selectedIdx === cIdx ? 'purple.800' : 'transparent'}
          onClick={() => setSelectedIdx(cIdx)}
          cursor='pointer'
          p='4px 8px'
          borderRadius='8px'
          bg={
            selectedIdx !== undefined &&
            selectedIdx + 1 === question.answer &&
            selectedIdx === cIdx
              ? 'green.200'
              : 'transparent'
          }
          _hover={{
            bg:
              selectedIdx !== undefined &&
              selectedIdx + 1 === question.answer &&
              selectedIdx === cIdx
                ? 'green.200'
                : 'rgba(220,220,220,0.5)',
          }}
          mt='4px'
        >
          [{cIdx + 1}] {c}
        </Text>
      ))}
    </Box>
  );
}

export default function Home() {
  const [result, setResult] = useState([]);

  useEffect(() => {
    const incorrects = JSON.parse(localStorage.getItem('incorrects'));
    setResult(incorrects);
  }, []);

  return (
    <Providers>
      <Grid gridTemplateRows='60px auto' h='100vh'>
        <Header />
        <Grid gridTemplateColumns='264px auto 264px'>
          <LeftNav />
          <Box h='calc(100vh - 60px)' overflow='scroll' p='28px 20px'>
            {result.length === 0 ? (
              <div>
                <Text>오답이 없어요!</Text>
                <Link href='/'>홈으로 가기</Link>
              </div>
            ) : (
              <Flex flexDirection='column' gap='40px'>
                {result.map((r, rIdx) => (
                  <Review key={rIdx} question={r} />
                ))}
              </Flex>
            )}
          </Box>
          <RightNav />
        </Grid>
      </Grid>
    </Providers>
  );
}
