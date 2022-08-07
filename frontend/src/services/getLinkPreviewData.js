import axios from "axios";

const getLinkPreviewData = async (url) => {
  return await axios.post("https://get-link-preview.herokuapp.com/", {
    url,
  });
};

export default getLinkPreviewData;
