import { Center, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useState } from 'react';

const ChoiceQuestion = (props) => {
  const questions = props.questions;
  const [curQIndex, setCurQIndex] = useState(0);
  const [numAns, setNumAns] = useState(0);

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
      <Text>정답 수 {numAns} / 5</Text>
      <Text>Question 0{questions[curQIndex].questionIndex}</Text>
      <Text>{questions[curQIndex].question}</Text>
      <Flex direction='column' gap='8px'>
        {questions[curQIndex].choices.map((c, cIdx) => (
          <Text
            key={cIdx}
            onClick={() => {
              const realAnswer = questions[curQIndex].answer;
              if (realAnswer - 1 === cIdx) {
                //정답일 때
                setNumAns((prev) => prev + 1);
              } else {
                // 오답일 때
              }
              setCurQIndex((prev) => prev + 1);
            }}
            cursor='pointer'
          >
            [{cIdx + 1}] {c}
          </Text>
        ))}
      </Flex>
    </Center>
  );
};

export default ChoiceQuestion;
