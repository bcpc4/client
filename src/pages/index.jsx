import { Providers } from '@/app/providers';
import { Button, Flex, Input } from '@chakra-ui/react';
import axios from 'axios';
import { useRef, useState } from 'react';

export default function Home() {
  const inputRef = useRef();
  const [result, setResult] = useState([]);

  return (
    <Providers>
      <Flex>
        <Input ref={inputRef} />
        <Button
          w='200px'
          color='white'
          bgColor='green.600'
          onClick={() => {
            const inputValue = encodeURI(inputRef.current.value);
            axios.get(`/api/get_questions?query=${inputValue}`).then((r) => {
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
    </Providers>
  );
}
