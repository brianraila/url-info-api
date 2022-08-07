import React from "react";

const Landing = ({ landingRef, scrollToFeatures }) => {
  return (
    <>
      <header className="header" ref={landingRef}>
        <div className="flex-center">
          <img className="logo" src="./broken-link.png" alt="logo"></img>
          <div className="logo-name">get link preview</div>
        </div>
      </header>

      <main id="main">
        <div className="main-wrapper">
          <div className="main-left">
            <img
              className="logo-title"
              src="./broken-link.png"
              alt="logo"
            ></img>
            <h1>Link Preview</h1>
            <p className="main-desc">
              View the link preview using our App. Use the API to generate link
              preview in your app.
            </p>
            <div className="ctas">
              <button className="know-more-btn" onClick={scrollToFeatures}>
                Get Started
              </button>
            </div>
          </div>
          <div className="main-right">
            <img src="./headerlink.svg" alt="logo" className="mockup" />
          </div>
        </div>
      </main>
    </>
  );
};

export default Landing;
