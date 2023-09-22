import { Providers } from '@/app/providers';
import Header from '@/components/Header';
import LeftNav from '@/components/LeftNav';
import RightNav from '@/components/RightNav';
import { Box, Flex, Grid } from '@chakra-ui/react';

export default function Home() {
  return (
    <Providers>
      <Grid gridTemplateRows='60px auto' h='100vh'>
        <Header />
        <Grid gridTemplateColumns='264px auto 264px'>
          <LeftNav />
          <Box h='calc(100vh - 60px)' overflow='scroll'>
            <Flex>대화하기</Flex>
          </Box>
          <RightNav />
        </Grid>
      </Grid>
    </Providers>
  );
}
