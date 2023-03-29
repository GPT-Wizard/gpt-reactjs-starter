import gptResponse from './api';
import { samplePrompt } from './promptEngine';
import { sanitize } from './promptHelper';

const promptMap = {
  SAMPLE: samplePrompt,
};

const gptResponseBuilder = async (promptKey, promptOptions) => {
  const promptFunction = promptMap[promptKey];
  const prompt = await promptFunction(promptOptions);

  const response = await gptResponse(prompt);
  const sanitizedResponse = sanitize(response);
  const parsedResponse = JSON.parse(sanitizedResponse);

  return parsedResponse;
};

export default gptResponseBuilder;
