import { addIncorrect } from '@/utils/review';
import { Box, Button, Center, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const ChoiceQuestion = (props) => {
  const questions = props.questions;
  const [curQIndex, setCurQIndex] = useState(0);
  const [numAns, setNumAns] = useState(0);

  useEffect(() => {
    if (curQIndex >= questions.length) {
      const prevProgress = parseFloat(localStorage.getItem('progress') ?? '0');
      localStorage.setItem('progress', (prevProgress + numAns).toString());
    }
  }, [curQIndex, questions, numAns]);

  if (questions.length === 0) return <div>불러오는중..</div>;

  if (curQIndex >= questions.length)
    return (
      <Center gap='12px' flexDir='column'>
        <Text>정답 수 {numAns} / 5</Text>
        <Text>테스트 끝!</Text>
        <Link href='/'>홈으로 가기</Link>
      </Center>
    );

  return (
    <Center gap='12px' flexDir='column'>
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        height='80vh'
        margin='40px'
        background='rgba(96.17, 157.45, 94.47, 0.30)'
        borderRadius='20px'
      >
        <Text marginTop='30px' fontWeight='bold'>
          정답 수
        </Text>
        <Text marginBottom='30px'>{numAns} / 5</Text>
        <Box
          backgroundColor='white'
          fontWeight='bold'
          background=' white'
          borderRadius='20px'
          padding='10px 20px'
        >
          Question 0{questions[curQIndex].questionIndex}
        </Box>
        <Box
          width='auto'
          margin='30px 20px'
          display='flex'
          flexDirection='column'
          alignItems='center'
          backgroundColor='white'
          borderRadius='10px'
          paddingBottom='20px'
        >
          <Text padding='40px 50px'>{questions[curQIndex].question}</Text>
          <Flex margin='20px 0px' direction='column' gap='8px'>
            {questions[curQIndex].choices.map((c, cIdx) => (
              <Button
                colorScheme='teal'
                variant='outline'
                key={cIdx}
                onClick={() => {
                  const realAnswer = questions[curQIndex].answer;
                  if (realAnswer - 1 === cIdx) {
                    //정답일 때
                    setNumAns((prev) => prev + 1);
                  } else {
                    // 오답일 때
                    addIncorrect(questions[curQIndex]);
                  }
                  setCurQIndex((prev) => prev + 1);
                }}
                cursor='pointer'
              >
                [{cIdx + 1}] {c}
              </Button>
            ))}
          </Flex>
        </Box>
      </Box>
    </Center>
  );
};

export default ChoiceQuestion;
