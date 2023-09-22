import { Providers } from '@/app/providers';
import ChoiceQuestion from '@/components/ChoiceQuestion';
import LeftNav from '@/components/LeftNav';
import RightNav from '@/components/RightNav';
import { Box, Flex, Grid } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Home() {
  const [result, setResult] = useState([]);

  useEffect(() => {
    const major = localStorage.getItem('major');
    const inputValue = encodeURI(major);
    axios.get(`/api/get_blank_fill_questions?query=${inputValue}`).then((r) => {
      setResult(r.data.result);
    });
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
            <Flex direction='column' gap='4px'>
              <ChoiceQuestion questions={result} />
            </Flex>
          </Box>
          <RightNav />
        </Grid>
      </Grid>
    </Providers>
  );
}
