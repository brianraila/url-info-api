exports.getType = (html) => {
  const type = html("meta[property='og:type']").attr("content");

  return type;
};
