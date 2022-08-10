exports.getOgUrl = (html) => {
  const url = html("meta[property='og:url']").attr("content");

  return url;
};
