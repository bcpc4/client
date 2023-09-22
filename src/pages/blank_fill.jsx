import { Providers } from '@/app/providers';
import LeftNav from '@/components/LeftNav';
import RightNav from '@/components/RightNav';
import { Box, Button, Flex, Grid, Input } from '@chakra-ui/react';
import axios from 'axios';
import { useRef, useState } from 'react';

export default function Home() {
  const inputRef = useRef();
  const [result, setResult] = useState([]);

  return (
    <Providers>
      <Grid gridTemplateRows='60px auto' h='100vh'>
        <Box borderBottom='1px solid' borderColor='gray.600'>
          헤더 있는 곳
        </Box>
        <Grid gridTemplateColumns='264px auto 264px'>
          <LeftNav />
          <div>
            <Flex>
              <Input ref={inputRef} />
              <Button
                w='200px'
                color='white'
                bgColor='green.600'
                onClick={() => {
                  const inputValue = encodeURI(inputRef.current.value);
                  axios
                    .get(`/api/get_questions?query=${inputValue}`)
                    .then((r) => {
                      setResult(r.data.result);
                    });
                }}
              >
                문제 만들기
              </Button>
            </Flex>
            <Flex direction='column' gap='4px'>
              {result.map((r) => (
                <div key={r.questionIndex}>
                  <Flex gap='8px'>
                    <span>{r.questionIndex}.</span>
                    <span>{r.question}</span>
                  </Flex>
                  <div>
                    {r.choices.map((c, cIdx) => (
                      <div key={cIdx}>
                        [{cIdx + 1}] {c}
                      </div>
                    ))}
                  </div>
                  <div>(answer: {r.answer})</div>
                </div>
              ))}
            </Flex>
          </div>
          <RightNav />
        </Grid>
      </Grid>
    </Providers>
  );
}
