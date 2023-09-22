import { Providers } from '@/app/providers';
import { Button, Flex, Input, Text } from '@chakra-ui/react';
import axios from 'axios';
import { useRef, useState } from 'react';

export default function Home() {
  const inputRef = useRef();
  const [result, setResult] = useState(null);

  return (
    <Providers>
      <Flex>
        <Input ref={inputRef} />
        <Button
          w='200px'
          color='white'
          bgColor='green.600'
          onClick={() => {
            const inputValue = inputRef.current.value;
            axios.get(`/api/get_questions?query=${inputValue}`).then((r) => {
              setResult(r.data.result);
            });
          }}
        >
          문제 만들기
        </Button>
      </Flex>
      <Text whiteSpace='pre-wrap'>{result}</Text>
    </Providers>
  );
}
