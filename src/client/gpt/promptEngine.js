const purposeOfCampaignPrompt = ({ partner }) => {
  const prompt = `You are one of the smartest digital marketing brain in the world. Your job is to strategise perfect digital marketing campaign for companies. You consult companies on What type of digital campaign they should run to create more engagement from end user which interns help them to generate more revenue.

  Give a list of possible purposes for which ${partner} will run campaigns for in the JSON format
  \n{"campaignPurposes": [{"purpose": <Campaign purpose title>, "description": <Campaign purpose description>},]
  
  Example of general campaign purposes: Product Marketing, Sales, Service, Training, Workshop, etc.`;

  return prompt;
};

const targetAudiencePrompt = ({
  partner,
  campaignPurpose,
  campaignDetails,
}) => {
  const prompt = `You are one of the smartest digital marketing brain in the world. Your job is to strategise perfect digital marketing campaign for companies. You consult companies on What type of digital campaign they should run to create more engagement from end user which interns help them to generate more revenue.

  Purpose of my campaign - '${campaignPurpose}'
  More details about the campaign - '${campaignDetails}'

  I am creating a campaign for ${partner} for the above details. Give me the top 4 target audience I need to focus on while creating the campaign in the following format
  \n{"targetAudiences": ["<Small line of Target audience>",]}`;

  return prompt;
};

export { purposeOfCampaignPrompt, targetAudiencePrompt };
