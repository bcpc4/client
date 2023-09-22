import { getChat } from '@/utils/chat';
import { getScholarResults } from '@/utils/scholar';

export function answerParser(str) {
  const regex =
    /\[MapIndex\] (\d+)\n\[Vocab\] ([^\n]+)\n\[Definition\] ([^\n]+)/g;

  let match;
  const questions = [];

  while ((match = regex.exec(str)) !== null) {
    questions.push({
      mapIndex: parseInt(match[1], 10),
      vocab: match[2],
      definition: match[3],
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

  const systemMessage = `You are AI Question Setter that makes English vocabulary test for Prospective Graduate Student of ${query} major.\n
    Below are trend papers from google scholar search engine.\n
    ${scholarResultsToText}
    
    make 4 vocabulary - definition map , the vocabulary must be unfamiliar and specialized
    The format of each map must be like the example below.
    ------
    [MapIndex] 1
    [Vocab] monoacylglycerol lipase (MAGL) 
    [Definition] It is a serine hydrolase enzyme that plays a role in regulating endocannabinoid signaling and lipid metabolism.
    ------
    `;

  const result = await getChat(systemMessage, [], '');
  const parsedResult = answerParser(result);

  return response.status(200).json({ result: parsedResult });
}
