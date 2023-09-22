import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.NEXT_OPENAI_KEY,
});

export async function getChat(systemMessage, example, message) {
  const chatCompletion = await openai.chat.completions.create({
    messages: [
      { role: 'system', content: systemMessage },
      ...example,
      ...(message ? [{ role: 'user', content: message }] : []),
    ],
    model: 'gpt-3.5-turbo',
  });
  const answer = chatCompletion.choices[0].message.content;
  return answer;
}
