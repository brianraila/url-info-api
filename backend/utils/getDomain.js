const { validateUrl } = require("./vaildateUrl");

exports.getDomain = (url) => {
  if (!validateUrl(url)) {
    return;
  }

  const urlObj = new URL(url);

  const domain = urlObj.hostname.replace("www.", "");

  return domain;
};
