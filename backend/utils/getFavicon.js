const { getAbsolutePath } = require("./getAbsolutePath");

exports.getFavicon = (url, html) => {
  const faviconUrl = html("link[rel='icon']").attr("href");

  const favicon = getAbsolutePath(url, faviconUrl)

  return favicon;
};
