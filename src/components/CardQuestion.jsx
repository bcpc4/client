import { shuffleArray } from '@/utils/shuffle';
import { Center, Flex, SimpleGrid, Text } from '@chakra-ui/react';
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
      <div>
        <Text>시도 횟수 {numTry} (최소 4)</Text>
        <Text>테스트 끝!</Text>
        <Link href='/'>홈으로 가기</Link>
      </div>
    );

  return (
    <div>
      <Text>시도 횟수 {numTry} (최소 4)</Text>
      <SimpleGrid columns={2}>
        <Flex direction='column' p='8px' gap='8px'>
          {shuffledVocabs.map((sv) =>
            doneVocabs.includes(sv.index) ? (
              <React.Fragment key={sv.index} />
            ) : (
              <Center
                h='320px'
                p='12px'
                key={sv.index}
                border='1px solid'
                borderColor={
                  selectedVocab?.index === sv.index ? 'gray.600' : 'gray.200'
                }
                cursor='pointer'
                onClick={() => setSelectedVocab(sv)}
              >
                <Text textAlign='center'>{sv.content}</Text>
              </Center>
            )
          )}
        </Flex>
        <Flex direction='column' p='8px' gap='8px'>
          {shuffledDefinitions.map((sv) =>
            doneDefinitions.includes(sv.index) ? (
              <React.Fragment key={sv.index} />
            ) : (
              <Center
                h='320px'
                p='12px'
                key={sv.index}
                border='1px solid'
                borderColor={
                  selectedDefinition?.index === sv.index
                    ? 'gray.600'
                    : 'gray.200'
                }
                cursor='pointer'
                onClick={() => setSelectedDefinition(sv)}
              >
                <Text textAlign='center'>{sv.content}</Text>
              </Center>
            )
          )}
        </Flex>
      </SimpleGrid>
    </div>
  );
};

export default CardQuestion;