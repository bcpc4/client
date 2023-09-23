import { addIncorrect } from "@/utils/review";
import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";

const ChoiceQuestion = (props) => {
  const questions = props.questions;
  const [curQIndex, setCurQIndex] = useState(0);
  const [numAns, setNumAns] = useState(0);
  const [phase, setPhase] = useState("INIT");

  useEffect(() => {
    if (curQIndex >= questions.length) {
      const prevProgress = parseFloat(localStorage.getItem("progress") ?? "0");
      localStorage.setItem("progress", (prevProgress + numAns).toString());
    }
  }, [curQIndex, questions, numAns]);

  if (phase === "INIT")
    return (
      <Center h="calc(100vh - 60px)" flexDir="column">
        <Image
          w="150px"
          src="https://s3-alpha-sig.figma.com/img/fdee/10ba/02ea0d674ddd84ab06b07eb3342448c4?Expires=1696204800&Signature=L0~DrBoTIwlvYNVsd4IBjWX1469B9UO0Dik9vFemM1UyYyzcTB1OJbhe8aIsMX4-QY3IHp~yzOc6HytQrnj2UoPZhV0CbpSAcnPrVzkXCdhPJVuLDBFNAExyNi7AYsuz3hKqlpWNAntXjgK8tJlV~rciAAVSFpiCyuqT5k5ydcprEdSqje55607LwLTWNLFBqpzJb8phfIuk-upqSaFWWYgRRmdWdeqfcrc~ENwwyV0BkVa0XZHaZZrf9MJwSCjtPjcTrJIEtnyoeX-XKxoPw-FTmLI3uyZ7MT2NfiSr8ILZdX6OPHYaBDTh7AF2GQ7MivrOaW064ckfT9zsM91c3w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="logo"
        />
        <Box h="30px" />
        <Input
          type="number"
          placeholder="문제 수 선택"
          textAlign="center"
          bg="#164330"
          color="white"
          size="lg"
          w="320px"
        />
        <Box h="90px" />
        <Center
          bg="#164330"
          w="200px"
          h="200px"
          borderRadius="50%"
          cursor="pointer"
          onClick={() => setPhase("START")}
        >
          <Text color="white" fontSize="30px" fontWeight="bold">
            Start!
          </Text>
        </Center>
      </Center>
    );

  if (questions.length === 0) return <div>불러오는중..</div>;

  if (curQIndex >= questions.length)
    return (
      <Center gap="12px" flexDir="column">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          height="40vh"
          width="80%"
          margin="40px"
          background="rgba(96.17, 157.45, 94.47, 0.30)"
          borderRadius="20px"
        >
          <Box
            marginTop="50px"
            boxShadow="inner"
            p="6"
            rounded="md"
            bg="white"
            backgroundColor="white"
            fontWeight="bold"
            background=" white"
            borderRadius="20px"
            width="40%"
            padding="10px 20px"
          >
            <Flex align="center" justify="center" height="100%">
              퀴즈 종료
            </Flex>
          </Box>

          <Text marginTop="20px">정답 수 {numAns} / 5</Text>

          <Button
            backgroundColor="#569E54"
            color="white"
            marginTop="50px"
            colorScheme="teal"
            variant="outline"
          >
            <Link href="/">홈으로 가기</Link>
          </Button>
        </Box>
      </Center>
    );

  return (
    <Center gap="12px" flexDir="column">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        height="auto"
        margin="40px"
        background="rgba(96.17, 157.45, 94.47, 0.30)"
        borderRadius="20px"
      >
        <Text marginTop="30px" fontWeight="bold">
          정답 수
        </Text>
        <Text marginBottom="20px">{numAns} / 5</Text>
        <Box
          boxShadow="inner"
          p="6"
          rounded="md"
          bg="white"
          backgroundColor="white"
          fontWeight="bold"
          background=" white"
          borderRadius="20px"
          padding="10px 20px"
        >
          Question 0{questions[curQIndex].questionIndex}
        </Box>
        <Box
          width="auto"
          margin="30px 20px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          backgroundColor="white"
          borderRadius="10px"
          paddingBottom="20px"
        >
          <Text fontWeight="bold" padding="40px 50px">
            {questions[curQIndex].question}
          </Text>
          <Flex margin="20px 0px" direction="column" gap="8px">
            {questions[curQIndex].choices.map((c, cIdx) => (
              <Button
                marginTop="10px"
                colorScheme="teal"
                variant="outline"
                key={cIdx}
                onClick={() => {
                  const realAnswer = questions[curQIndex].answer;
                  if (realAnswer - 1 === cIdx) {
                    //정답일 때
                    setNumAns((prev) => prev + 1);
                  } else {
                    // 오답일 때
                    addIncorrect(questions[curQIndex]);
                  }
                  setCurQIndex((prev) => prev + 1);
                }}
                cursor="pointer"
              >
                [{cIdx + 1}] {c}
              </Button>
            ))}
          </Flex>
        </Box>
      </Box>
    </Center>
  );
};

export default ChoiceQuestion;
