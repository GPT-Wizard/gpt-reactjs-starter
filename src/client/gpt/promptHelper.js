const sanitize = (response) => {
  const startIndex = response.indexOf('{');
  const endIndex = response.lastIndexOf('}');

  const replaced = response
    .slice(startIndex, endIndex + 1)
    .replaceAll(/\n/g, '')
    .replaceAll(/\t/g, '')
    .replaceAll(/,\\n/g, ',')
    .replaceAll(/\{\\n/g, '{')
    .replaceAll(/\\n\{/g, '{')
    .replaceAll(/\\n\}/g, '}')
    .replaceAll(/,\}/g, '}')
    .replaceAll(/\[\\n/g, '[')
    .replaceAll(/\\n\]/g, ']')
    .replaceAll(/\\n\"/g, '"')
    .replaceAll(/\"\\n/g, '"')
    .replaceAll(/”/g, '"');

  return replaced;
};

export { sanitize };
