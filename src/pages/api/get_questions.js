import { getChat } from '@/utils/chat';
import { getScholarResults } from '@/utils/scholar';

export default async function handler(request, response) {
  const query = request.query.query;
  const scholarResults = await getScholarResults(query);
  const scholarResultsToText = scholarResults
    .map((sr) => `[${sr.title}]\n${sr.snippet}`)
    .join('\n\n');
  console.log(scholarResultsToText.length);
  const systemMessage = `You are AI Question Setter that makes English vocabulary test for Prospective Graduate Student of ${query} major.\n
    Below are trend papers from google scholar search engine.\n
    ${scholarResultsToText}
    
    make 5 vocabulary test by [Multiple Choice Fill-in-the-Blank Example] format.
    `;

  const result = await getChat(systemMessage, [], '');

  return response.status(200).json({ result });
}
