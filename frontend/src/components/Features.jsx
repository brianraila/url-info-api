import React from "react";

const Features = ({ scrollToTest, scrollToNpm, scrollToApi, featuresRef }) => {
  return (
    <section
      id="events"
      className="feature section section-events"
      ref={featuresRef}
    >
      <h2 style={{ fontSize: "2rem" }}>Features</h2>
      <div className="events-container">
        <div className="event">
          <img src="./broken-link.png" alt="" className="forum-icon" />
          <h3 className="section-subtitle forum-heading">Test it out</h3>
          <p className="section-forum-desc">
            Enter the URL and test the link preview in this app itself.
          </p>
          <button onClick={scrollToTest} style={{ cursor: "pointer" }}>
            Test
          </button>
        </div>
        <div className="event">
          <img src="./npm.png" alt="" className="forum-icon" />
          <h3 className="section-subtitle forum-heading">NPM package</h3>
          <p className="section-forum-desc">
            Install the NPM package and use the custom hook to get link preview
            of any link and use it in your app.
          </p>
          <button onClick={scrollToNpm} style={{ cursor: "pointer" }}>
            Test NPM
          </button>
        </div>
        <div className="event">
          <img src="./api.png" alt="" className="forum-icon" />
          <h3 className="section-subtitle forum-heading">API</h3>
          <p className="section-forum-desc">
            Use the API endpoint to get link preview of any link and use it in
            your app.
          </p>
          <button onClick={scrollToApi} style={{ cursor: "pointer" }}>
            Test API
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
