const { getAbsolutePath } = require("./getAbsolutePath");

exports.getFavicon = (url, html) => {
  let favicon = html("link[rel='icon']").attr("href");

  if (favicon) {
    favicon = getAbsolutePath(url, favicon);
  }

  return favicon;
};
