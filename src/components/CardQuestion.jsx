import { shuffleArray } from '@/utils/shuffle';
import { Box, Button, Center, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { useEffect, useMemo, useState } from 'react';

const CardQuestion = (props) => {
  const vocabs = props.vocabs;
  const shuffledVocabs = useMemo(
    () =>
      shuffleArray(
        vocabs.map((v) => ({ index: v.mapIndex, content: v.vocab }))
      ),
    [vocabs]
  );
  const shuffledDefinitions = useMemo(
    () =>
      shuffleArray(
        vocabs.map((v) => ({ index: v.mapIndex, content: v.definition }))
      ),
    [vocabs]
  );
  const [numTry, setNumTry] = useState(0);
  const [selectedVocab, setSelectedVocab] = useState(undefined);
  const [selectedDefinition, setSelectedDefinition] = useState(undefined);
  const [doneVocabs, setDoneVocabs] = useState([]);
  const [doneDefinitions, setDoneDefinitions] = useState([]);

  useEffect(() => {
    if (selectedVocab === undefined || selectedDefinition === undefined) return;
    setNumTry((prev) => prev + 1);
    if (selectedVocab.index === selectedDefinition.index) {
      // 정답일때
      setDoneVocabs((prev) => [...prev, selectedVocab.index]);
      setDoneDefinitions((prev) => [...prev, selectedDefinition.index]);
      setSelectedVocab(undefined);
      setSelectedDefinition(undefined);
    }
  }, [selectedVocab, selectedDefinition]);

  if (vocabs.length === 0) return <div>불러오는중..</div>;

  if (doneVocabs.length === 4 && doneDefinitions.length === 4)
    return (
      <Center gap='12px' flexDir='column'>
        <Box
          display='flex'
          flexDirection='column'
          alignItems='center'
          height='40vh'
          width='80%'
          margin='40px'
          background='rgba(96.17, 157.45, 94.47, 0.30)'
          borderRadius='20px'
        >
          <Box
            marginTop='50px'
            boxShadow='inner'
            p='6'
            rounded='md'
            bg='white'
            backgroundColor='white'
            fontWeight='bold'
            background=' white'
            borderRadius='20px'
            width='40%'
            padding='10px 20px'
          >
            <Flex align='center' justify='center' height='100%'>
              퀴즈 종료
            </Flex>
          </Box>

          <Text marginTop='20px'>시도 횟수 {numTry}회</Text>

          <Button
            as={motion.div}
            whileHover={{ scale: 1.05 }}
            backgroundColor='#569E54'
            color='white'
            marginTop='50px'
            variant='outline'
            _hover={{ backgroundColor: 'green.500' }}
          >
            <Link href='/'>홈으로 가기</Link>
          </Button>
        </Box>
      </Center>
    );

  return (
    <div>
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        height='auto'
        margin='40px'
        background='rgba(96.17, 157.45, 94.47, 0.30)'
        borderRadius='20px'
      >
        <Text marginTop='30px' fontWeight='bold'>
          시도 횟수 {numTry} (최소 4)
        </Text>
        <SimpleGrid columns={2}>
          <Flex direction='column' p='32px' pr='16px' gap='32px'>
            {shuffledVocabs.map((sv) =>
              doneVocabs.includes(sv.index) ? (
                <React.Fragment key={sv.index} />
              ) : (
                <Center
                  as={motion.div}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: 'rgba(255,255,255,0.3)',
                  }}
                  whileTap={{ scale: 1 }}
                  h='200px'
                  p='12px'
                  key={sv.index}
                  borderRadius='8px'
                  border='2px solid'
                  borderColor={
                    selectedVocab?.index === sv.index ? '#164330' : 'white'
                  }
                  cursor='pointer'
                  onClick={() => setSelectedVocab(sv)}
                >
                  <Text textAlign='center' fontSize='20px'>
                    {sv.content}
                  </Text>
                </Center>
              )
            )}
          </Flex>
          <Flex direction='column' p='32px' pl='16px' gap='32px'>
            {shuffledDefinitions.map((sv) =>
              doneDefinitions.includes(sv.index) ? (
                <React.Fragment key={sv.index} />
              ) : (
                <Center
                  as={motion.div}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: 'rgba(255,255,255,0.3)',
                  }}
                  whileTap={{ scale: 1 }}
                  h='200px'
                  p='12px'
                  key={sv.index}
                  borderRadius='8px'
                  border='2px solid'
                  borderColor={
                    selectedDefinition?.index === sv.index ? '#164330' : 'white'
                  }
                  cursor='pointer'
                  onClick={() => setSelectedDefinition(sv)}
                >
                  <Text textAlign='center' fontSize='20px'>
                    {sv.content}
                  </Text>
                </Center>
              )
            )}
          </Flex>
        </SimpleGrid>
      </Box>
    </div>
  );
};

export default CardQuestion;
