import axios from "axios";

const getLinkPreviewData = async (url) => {
  return await axios.post("https://get-link-preview.herokuapp.com/", {
    text: url,
  });
};

export default getLinkPreviewData;
