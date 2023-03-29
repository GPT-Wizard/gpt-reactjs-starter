import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
});

const gptResponse = async (prompt) => {
  try {
    const openai = new OpenAIApi(configuration);
    const completion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt,
      max_tokens: 3000,
    });
    const response = completion.data.choices[0].text;

    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export default gptResponse;
