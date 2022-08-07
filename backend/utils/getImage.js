exports.getImage = (html) => {
  const image = html("meta[property='og:image']").attr("content");

  return image;
};
