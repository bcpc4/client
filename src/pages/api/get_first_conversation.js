import { getChat } from '@/utils/chat';
import { getScholarResults } from '@/utils/scholar';

export default async function handler(request, response) {
  const query = decodeURI(request.query.query);
  const scholarResults = await getScholarResults(query);
  const scholarResultsToText = scholarResults
    .map((sr) => `[${sr.title}]\n${sr.snippet}`)
    .join('\n\n');

  const systemMessage = `You are AI graduate student, major in ${query}\n
    Below are trend papers from google scholar search engine.\n
    ${scholarResultsToText}
    
    You're at a conference, talking with colleagues in the same field. 
    Consider the topics of the papers presented, say something to bring up as a starting point for conversation. Questioning might be good.
    It must be less than 100 letter. no quotation marks. 
    `;

  const result = await getChat(systemMessage, [], '');

  return response.status(200).json({ result });
}
