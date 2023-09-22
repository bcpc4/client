import { Box, Flex } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const LeftNav = () => {
  const router = useRouter();

  return (
    <Flex
      direction='column'
      gap='20px'
      padding='20px 12px'
      w='264px'
      h='calc(100vh - 60px)'
      bg='green.100'
    >
      <Link href='/blank_fill'>
        <Box
          bg={
            router.pathname.slice(1) === 'blank_fill' ? 'orange.100' : 'white'
          }
        >
          빈칸 채우기
        </Box>
      </Link>
      <Link href='/choice_question'>
        <Box
          bg={
            router.pathname.slice(1) === 'choice_question'
              ? 'orange.100'
              : 'white'
          }
        >
          객관식 풀기
        </Box>
      </Link>
      <Link href='/card'>
        <Box bg={router.pathname.slice(1) === 'card' ? 'orange.100' : 'white'}>
          카드 맞추기
        </Box>
      </Link>
      <Link href='/conversation'>
        <Box
          bg={
            router.pathname.slice(1) === 'conversation' ? 'orange.100' : 'white'
          }
        >
          대화하기
        </Box>
      </Link>
    </Flex>
  );
};

export default LeftNav;
