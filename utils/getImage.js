const { getAbsolutePath } = require("./getAbsolutePath");

exports.getImage = (url, html) => {
  let image = html("meta[property='og:image']").attr("content");

  if (image) {
    image = getAbsolutePath(url, image);
  }

  return image;
};
