exports.getDescription = (html) => {
  const description = html("meta[property='og:description']").attr(
    "content"
  );

  return description;
};
