import { getChat } from '@/utils/chat';
import { getScholarResults } from '@/utils/scholar';

function answerParser(str) {
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

export default async function handler(request, response) {
  const query = decodeURI(request.query.query);
  const scholarResults = await getScholarResults(query);
  const scholarResultsToText = scholarResults
    .map((sr) => `[${sr.title}]\n${sr.snippet}`)
    .join('\n\n');
  console.log(scholarResultsToText.length);
  const systemMessage = `You are AI Question Setter that makes English vocabulary test for Prospective Graduate Student of ${query} major.\n
    Below are trend papers from google scholar search engine.\n
    ${scholarResultsToText}
    
    make 5 vocabulary test by [Multiple Choice Fill-in-the-Blank Example] format. Give answer also.
    The format of test must be like the example below.
    ------
    [QuestionIndex] 1
    [Question] The importance of _______ was highlighted in interviews with welfare clients after welfare reform.
    [Choice-1] quantitative data
    [Choice-2] qualitative data
    [Choice-3] statistical analysis
    [Choice-4] data mining
    [Answer] 2
    ------
    `;

  const result = await getChat(systemMessage, [], '');
  const parsedResult = answerParser(result);

  return response.status(200).json({ result: parsedResult });
}
