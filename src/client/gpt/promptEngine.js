const jokePrompt = (topic) => {
  const prompt = `You are one of the funniest comedian in the world. Your job is to tell me a joke about ${topic} in the JSON format
  {"joke": "<joke text here>"}`;

  return prompt;
};

export { jokePrompt };
