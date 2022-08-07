import React from "react";

const NpmPackage = () => {
  return (
    <section className="feature feature-api">
      <h2 style={{ marginTop: "2rem" }}>
        Get Link Preview <span>NPM Package 🔗</span>
      </h2>

      <a
        href="https://www.npmjs.com/package/get-link-preview"
        target="_blank"
        style={{ display: "inline-block", textAlign: "center", marginTop: "2rem", fontSize: "1.25rem" }}
      >
        NPM Package link
      </a>
      <div>
        <p
          style={{
            textAlign: "left",
            margin: "3rem 1rem 1rem 1rem",
            fontWeight: "bold",
            fontSize: "1.1rem",
          }}
        >
          Install the package
        </p>
        <div className="api-url">
          <code style={{ whiteSpace: "nowrap" }}>npm i get-link-preview</code>
        </div>
      </div>
      <div>
        <p
          style={{
            textAlign: "left",
            margin: "3rem 1rem 1rem 1rem",
            fontWeight: "bold",
            fontSize: "1.1rem",
          }}
        >
          Use the custom hook
        </p>
        <div className="api-url">
          <code style={{ whiteSpace: "nowrap" }}>
            <span>{"const "}</span>
            <span>{"{"} </span>
            <span>{"getLinkPreviewData, loading, error, data"} </span>
            <span>{"}"} </span>
            <span>{"="} </span>
            <span>{"useLinkPreview("}</span>
            <span>"https://github.com/siddhigate"</span>
            <span>{");"} </span>
          </code>
        </div>
      </div>
    </section>
  );
};

export default NpmPackage;
