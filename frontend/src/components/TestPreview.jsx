import React from "react";
import { useState } from "react";
import getLinkPreviewData from "../services/getLinkPreviewData";
import LinkPreviewCard from "./LinkPreviewCard";

const TestPreview = ({testRef}) => {
  const [previewData, setPreviewData] = useState();
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState(false);
  const [error, setError] = useState();

  const fetchLinkPreviewData = async (urlInput) => {
    setLoading(true);
    try {
      const res = await getLinkPreviewData(urlInput);
      console.log(res.data);
      setPreviewData(res.data);
    } catch (err) {
      if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError("Something went wrong!");
      }
      setPreviewData({ url });
    } finally {
      setLoading(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    resetOutput();

    const urlInput = e.target[0].value;

    if (!urlInput) {
      setError("Please enter url");
      setLoading(false);
      return;
    }

    if (!validateUrl(urlInput)) {
      setError("Please enter a valid url");
      setLoading(false);
      return;
    }

    setUrl(urlInput);

    fetchLinkPreviewData(urlInput);
  };

  const resetOutput = () => {
    setLoading(false);
    setError();
    setPreviewData();
    setUrl();
  };

  const validateUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  return (
    <section className="feature" ref={testRef}>
      <h2>Try Link Preview 🔗</h2>

      <form onSubmit={submitHandler}>
        
        <input type="url" name="url" onChange={resetOutput} placeholder="Enter url"></input>
        <button>Test</button>
      </form>

      <div className="output">
        {loading && "loading...."}
        {error && (
          <div style={{ textAlign: "center", color: "#DC2626" }}>
            {error} : Can't load preview data.
          </div>
        )}
        {previewData && (
          <LinkPreviewCard
            data={previewData}
            error={error}
            url={url}
          ></LinkPreviewCard>
        )}
      </div>
    </section>
  );
};

export default TestPreview;
