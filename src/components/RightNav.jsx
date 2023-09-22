import { Box, Flex } from '@chakra-ui/react';

const RightNav = () => {
  return (
    <Flex
      direction='column'
      gap='20px'
      padding='20px 12px'
      w='264px'
      h='calc(100vh - 60px)'
      bg='green.100'
    >
      <Box h='200px' bg='white'>
        프로필사진
      </Box>
      <Box bg='white'>이름</Box>
      <Box bg='white'>Lv. 2</Box>
      <Box h='200px' bg='white'>
        식물 사진
      </Box>
      <Box bg='white'>물</Box>
      <Box bg='white'>오답노트</Box>
    </Flex>
  );
};

export default RightNav;
