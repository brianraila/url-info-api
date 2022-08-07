import React, { useEffect, useState } from "react";

export const useLinkPreview = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState();

  async function getLinkPreviewData(url) {
    setLoading(true);
    setError();
    setData();
    try {
      const res = await fetch(
        `https://get-link-preview.herokuapp.com/?url=${url}`
      );

      const data = await res.json();

      setData(data);
    } catch (err) {
      if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError("Something went wrong!");
      }
      setData({ url });
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url) {
      getLinkPreviewData(url);
    }
  }, []);

  return { getLinkPreviewData, loading, error, data };
};
