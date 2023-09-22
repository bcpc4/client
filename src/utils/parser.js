export function answerParser(str) {
  const regex =
    /\[QuestionIndex\] (\d+)\n\[Question\] (.*?)\n\[Choice-1\] (.*?)\n\[Choice-2\] (.*?)\n\[Choice-3\] (.*?)\n\[Choice-4\] (.*?)\n\[Answer\] (\d+)/g;

  let match;
  const questions = [];

  while ((match = regex.exec(str)) !== null) {
    questions.push({
      questionIndex: parseInt(match[1], 10),
      question: match[2],
      choices: [match[3], match[4], match[5], match[6]],
      answer: parseInt(match[7], 10),
    });
  }
  return questions;
}
