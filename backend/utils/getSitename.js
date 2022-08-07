exports.getSitename = (html) => {
  const sitename = html("meta[property='og:site_name']").attr("content");

  return sitename;
};
