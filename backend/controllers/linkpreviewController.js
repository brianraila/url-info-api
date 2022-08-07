const axios = require("axios");
const cheerio = require("cheerio");
const {
  getTitle,
  getDescription,
  getImage,
  getSitename,
  getType,
  getOgUrl,
  getDomain,
  getFavicon,
  validateUrl,
} = require("../utils");

const getLinkPreview = async (req, res) => {
  const { url } = req.body;

  if (!validateUrl(url)) {
    return res.status(400).json({ success: false, message: "Invalid URL" });
  }

  try {
    const response = await axios.get(url);

    const html = cheerio.load(response.data);

    const title = getTitle(html);

    const description = getDescription(html);

    const image = getImage(html);

    const sitename = getSitename(html);

    const ogUrl = getOgUrl(html);

    const type = getType(html);

    const domain = getDomain(url);

    const favicon = getFavicon(url, html);

    return res.status(200).json({
      success: true,
      url,
      title,
      description,
      image,
      sitename,
      ogUrl,
      type,
      domain,
      favicon,
    });
  } catch (err) {

    console.log(err)
    const status = err.response?.status || 400;
    const statusText = err.response?.statusText || "Something went wrong";

    return res.status(status).json({ sucess: false, message: statusText });
  }
};

module.exports = { getLinkPreview };
