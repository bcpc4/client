import { Providers } from '@/app/providers';
import LeftNav from '@/components/LeftNav';
import RightNav from '@/components/RightNav';
import { Box, Grid, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

function Review(props) {
  const question = props.question;
  const [selectedIdx, setSelectedIdx] = useState(undefined);

  return (
    <Box
      bg={
        selectedIdx === undefined
          ? 'white'
          : selectedIdx + 1 === question.answer
          ? 'green.50'
          : 'red.100'
      }
    >
      <Text>{question.question}</Text>
      {question.choices.map((c, cIdx) => (
        <Text
          key={cIdx}
          border='1px solid'
          borderColor={selectedIdx === cIdx ? 'purple.800' : 'transparent'}
          onClick={() => setSelectedIdx(cIdx)}
        >
          {cIdx + 1} {c}
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
        <Box borderBottom='1px solid' borderColor='gray.600'>
          헤더 있는 곳
        </Box>
        <Grid gridTemplateColumns='264px auto 264px'>
          <LeftNav />
          <Box h='calc(100vh - 60px)' overflow='scroll'>
            {result.length === 0 ? (
              <div>
                <Text>오답이 없어요!</Text>
                <Link href='/'>홈으로 가기</Link>
              </div>
            ) : (
              <div>
                {result.map((r, rIdx) => (
                  <Review key={rIdx} question={r} />
                ))}
              </div>
            )}
          </Box>
          <RightNav />
        </Grid>
      </Grid>
    </Providers>
  );
}
