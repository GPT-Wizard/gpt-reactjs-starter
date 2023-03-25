import gptResponse from './api';
import { jokePrompt } from './promptEngine';
import sanitize from './sanitize';

const promptMap = {
  JOKE: jokePrompt,
};

const gptResponseBuilder = async (promptKey, promptOptions) => {
  const promptFunction = promptMap[promptKey];
  const prompt = await promptFunction(promptOptions);

  console.log({prompt});

  const response = await gptResponse(prompt);

  const sanitizedResponse = sanitize(response);
  console.log({sanitizedResponse});
  const parsedResponse = JSON.parse(sanitizedResponse);
  console.log({parsedResponse});

  return parsedResponse;
};

export default gptResponseBuilder;
