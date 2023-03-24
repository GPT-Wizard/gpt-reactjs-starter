import gptResponse from "./api";
import { purposeOfCampaignPrompt, targetAudiencePrompt } from "./promptEngine";
import sanitize from "./sanitize";

const promptMap = {
  PURPOSE: purposeOfCampaignPrompt,
  TARGET_AUDIENCE: targetAudiencePrompt,
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
