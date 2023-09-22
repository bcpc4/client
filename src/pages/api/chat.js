const openai = new OpenAI({
  apiKey: process.env.NEXT_OPENAI_KEY,
});

export default async function handler(request, response) {
  const message = request.body.message;
  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: message }],
    model: 'gpt-3.5-turbo',
  });
  const answer = chatCompletion.choices[0].message.content;
  return response.status(200).json({ answer });
}
