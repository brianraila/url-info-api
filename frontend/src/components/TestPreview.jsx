import React from "react";
import { useState } from "react";
import getLinkPreviewData from "../services/getLinkPreviewData";

const TestPreview = () => {
  const [previewData, setPreviewData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const fetchLinkPreviewData = async (url) => {
    try {
      const res = await getLinkPreviewData(url);
      console.log(res.data)
      setPreviewData(res.data);
    } catch (err) {
      if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError("Something went wrong!");
      }
      setPreviewData(null);
    } finally {
      setLoading(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    resetOutput();

    const url = e.target[0].value;

    if(!url) {
      setError("Please enter url");
      setLoading(false)
      return;
    }

    if(!validateUrl(url)) {
      setError("Please enter a valid url");
      setLoading(false)
      return;
    }

    fetchLinkPreviewData(url);
  };

  const resetOutput = () => {
    setLoading(true);
    setError();
    setPreviewData();
  };

  const validateUrl = (url) => {

    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }

  return (
    <section className="feature">
      <h2>Try Link Preview 🔗</h2>

      <form onSubmit={submitHandler}>
        <input type="url" name="url"></input>
        <button>Test</button>
      </form>

      <div className="output">
        {loading && "loading...."}
        {error && <div>{error}</div>}
        {previewData && "PreviewData"}
      </div>
    </section>
  );
};

export default TestPreview;
