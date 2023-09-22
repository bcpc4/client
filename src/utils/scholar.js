import axios from 'axios';

export const getScholarResults = async (query) => {
  const apiKey = process.env.NEXT_SERP_API_KEY;
  const scholarResult = await axios.get(
    `https://serpapi.com/search?engine=google_scholar&q=${query}&api_key=${apiKey}&as_ylo=2023&scisbd=2`
  );

  return scholarResult.data.organic_results.map((d) => ({
    title: d.title,
    link: d.link,
    snippet: d.snippet,
  }));
};
