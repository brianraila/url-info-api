exports.getTitle = (html) => {
  let title = html("meta[property='og:title']").attr("content");

  if (!title) {
    title = html("title").text();
  }

  return title;
};
