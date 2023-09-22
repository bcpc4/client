import { Providers } from '@/app/providers';
import Header from '@/components/Header';
import LeftNav from '@/components/LeftNav';
import RightNav from '@/components/RightNav';
import { Box, Flex, Grid, Image, Text } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Speech from 'speak-tts';

export default function Home() {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [firstQuestion, setFirstQuestion] = useState('');
  const [secondQuestion, setSecondQuestion] = useState('');
  const [myAnswerList, setMyAnswerList] = useState([]);

  const [recognition, setRecognition] = useState(undefined);

  useEffect(() => {
    setRecognition(
      new (window.SpeechRecognition || window.webkitSpeechRecognition)()
    );
  }, []);

  useEffect(() => {
    if (recognition) {
      recognition.onresult = (data) => {
        setMyAnswerList((prev) => [...prev, data.results[0][0].transcript]);
        setIsRecording(false);
      };
    }
  }, [recognition]);

  useEffect(() => {
    const major = localStorage.getItem('major');
    const inputValue = encodeURI(major);
    const speech = new Speech();
    speech.init({
      volume: 1,
      lang: 'en-GB',
      rate: 1,
      pitch: 1,
      voice: 'Google UK English Female',
    });
    axios.get(`/api/get_first_conversation?query=${inputValue}`).then((r) => {
      setFirstQuestion(r.data.result);
      setIsSpeaking(true);
      speech.speak({
        text: r.data.result,
        listeners: {
          onend: () => {
            setIsSpeaking(false);
          },
        },
      });
    });
  }, []);

  return (
    <Providers>
      <Grid gridTemplateRows='60px auto' h='100vh'>
        <Header />
        <Grid gridTemplateColumns='264px auto 264px'>
          <LeftNav />
          <Grid
            gridTemplateColumns='200px auto'
            h='calc(100vh - 60px)'
            overflow='scroll'
            padding='8px'
            gap='8px'
            alignItems='center'
          >
            {isSpeaking ? (
              <Image
                src='/avatar1.gif'
                alt='avatar'
                w='200px'
                borderRadius='50%'
                border='1px solid'
                borderColor='#164330'
              />
            ) : (
              <Image
                src='/avatar1.jpeg'
                alt='avatar'
                w='200px'
                borderRadius='50%'
                border='1px solid'
                borderColor='#164330'
              />
            )}
            <Flex flexDirection='column' gap='8px'>
              {firstQuestion !== '' ? (
                <Text
                  borderRadius='12px'
                  borderBottomLeftRadius='4px'
                  bg='#164330'
                  color='white'
                  p='4px 8px'
                >
                  {firstQuestion}
                </Text>
              ) : (
                <Text
                  borderRadius='12px'
                  borderBottomLeftRadius='4px'
                  bg='#164330'
                  color='white'
                  p='4px 8px'
                >
                  ...
                </Text>
              )}
              {myAnswerList[0] !== undefined && (
                <Text
                  borderRadius='12px'
                  borderBottomRightRadius='4px'
                  bg='gray.100'
                  p='4px 8px'
                >
                  {myAnswerList[0]}
                </Text>
              )}
              {secondQuestion !== '' && (
                <Text
                  borderRadius='12px'
                  borderBottomLeftRadius='4px'
                  bg='#164330'
                  color='white'
                  p='4px 8px'
                >
                  {secondQuestion}
                </Text>
              )}
              {myAnswerList[1] !== undefined && (
                <Text
                  borderRadius='12px'
                  borderBottomRightRadius='4px'
                  bg='gray.100'
                  p='4px 8px'
                >
                  {myAnswerList[1]}
                </Text>
              )}
            </Flex>
          </Grid>
          <RightNav />
        </Grid>
        <Box
          position='absolute'
          zIndex={3000}
          bottom='12px'
          left='50%'
          p='8px'
          borderRadius='6px'
          transform='translateX(-50%)'
          w='250px'
          bgColor='gray.200'
          textAlign='center'
          cursor='pointer'
          _hover={{ bg: 'gray.300' }}
          onClick={() => {
            if (!isRecording) {
              recognition.start();
              setIsRecording(true);
            } else {
              recognition.stop();
              setIsRecording(false);
            }
          }}
        >
          {isRecording ? '녹음 종료' : '녹음 시작'}
        </Box>
      </Grid>
    </Providers>
  );
}
