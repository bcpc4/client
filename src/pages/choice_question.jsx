import { Providers } from '@/app/providers';
import LeftNav from '@/components/LeftNav';
import RightNav from '@/components/RightNav';
import { Box, Flex, Grid } from '@chakra-ui/react';

export default function Home() {
  return (
    <Providers>
      <Grid gridTemplateRows='60px auto' h='100vh'>
        <Box borderBottom='1px solid' borderColor='gray.600'>
          헤더 있는 곳
        </Box>
        <Grid gridTemplateColumns='264px auto 264px'>
          <LeftNav />
          <Flex>객관식 풀기</Flex>
          <RightNav />
        </Grid>
      </Grid>
    </Providers>
  );
}
