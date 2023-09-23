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
    
    make 5 question test that user can study vocabulary by [Multiple Choice Example] format. Give answer also. Make answer only in English.
    The format of test must be like the example below. Make answer only in English. Never answer in Korean.
    ------
    [QuestionIndex] 1
    [Question] What can be measured in peripheral blood samples to provide information on tumour biology?
    [Choice-1] Circulating tumour cells
    [Choice-2] Circulating tumour DNA (ctDNA)
    [Choice-3] Both a) and b)
    [Choice-4] None of the above
    [Answer] 3
    ------
    `;

  const result = await getChat(systemMessage, [], '');
  const parsedResult = answerParser(result);

  return response.status(200).json({ result: parsedResult });
}
