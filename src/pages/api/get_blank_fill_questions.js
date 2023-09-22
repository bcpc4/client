import { getChat } from '@/utils/chat';
import { answerParser } from '@/utils/parser';
import { getScholarResults } from '@/utils/scholar';

export default async function handler(request, response) {
  const query = decodeURI(request.query.query);
  const scholarResults = await getScholarResults(query);
  const scholarResultsToText = scholarResults
    .map((sr) => `[${sr.title}]\n${sr.snippet}`)
    .join('\n\n');
  const systemMessage = `You are AI Question Setter that makes English vocabulary test for Prospective Graduate Student of ${query} major.\n
    Below are trend papers from google scholar search engine.\n
    ${scholarResultsToText}
    
    make 5 vocabulary test by [Multiple Choice Fill-in-the-Blank Example] format. Give answer also.
    The format of test must be like the example below. Make answer only in English. Never answer in Korean.
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
