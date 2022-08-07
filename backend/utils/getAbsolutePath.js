const { validateUrl } = require("./vaildateUrl");

exports.getAbsolutePath = (url, relativePath) => {
  if (!validateUrl(url)) {
    return;
  }

  const { origin, pathname } = new URL(url);

  if (relativePath.slice(0, 1) === "/") {
    return origin + pathname + relativePath.slice(1);
  }

  if (relativePath.slice(0, 2) === "./") {
    return origin + pathname + relativePath.slice(2);
  }

  return relativePath;
};
