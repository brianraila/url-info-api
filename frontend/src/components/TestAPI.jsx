import React from "react";

const TestAPI = ({ testRef }) => {
  return (
    <section className="feature feature-api" ref={testRef}>
      <h2>Link Preview API 🔗</h2>

      <div>
        <p
          style={{
            textAlign: "left",
            margin: "3rem 1rem 1rem 1rem",
            fontWeight: "bold",
            fontSize: "1.1rem",
          }}
        >
          API endpoint:{" "}
        </p>
        <a
          href="https://get-link-preview.herokuapp.com/?url=https://github.com/siddhigate"
          target="_blank"
          className="api-url"
        >
          <code>
            https://get-link-preview.herokuapp.com/?url=https://github.com/siddhigate
          </code>
        </a>

        <div>
          <p
            style={{ textAlign: "left", marginTop: "2rem", fontSize: "1.1rem" }}
          >
            <span style={{ fontWeight: "bold", margin: "1rem" }}>
              Request Type:
            </span>
            <span
              style={{
                backgroundColor: "#22C55E",
                display: "inline-block",
                padding: "0.25rem 1rem",
                borderRadius: "3px",
              }}
            >
              GET
            </span>
          </p>
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
            Request query:
          </p>
          <code className="api-url">?url=https://github.com/siddhigate</code>
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
            Response:
          </p>
          <code className="api-url">
            <p>{"{"}</p>
            <p> <span style={{fontWeight: "bold"}}>"success":</span> true</p>
            <p><span style={{fontWeight: "bold"}}>"title":</span> "siddhigate - Overview"</p>
            <p><span style={{fontWeight: "bold"}}>"description":</span> "Full stack developer. siddhigate has 49 repositories available. Follow their code on GitHub."</p>
            <p><span style={{fontWeight: "bold"}}>"sitename":</span> "GitHub"</p>
            <p><span style={{fontWeight: "bold"}}>"ogUrl":</span> "https://github.com/siddhigate"</p>
            <p><span style={{fontWeight: "bold"}}>"image":</span> "https://avatars.githubusercontent.com/u/80971056?v=4?s=400"</p>
            <p><span style={{fontWeight: "bold"}}>"type":</span> "profile"</p>
            <p><span style={{fontWeight: "bold"}}>"domain":</span> "github.com"</p>
            <p><span style={{fontWeight: "bold"}}>"favicon":</span> "https://github.githubassets.com/favicons/favicon.svg"</p>
            <p>{"}"}</p>
          </code>
        </div>
      </div>
    </section>
  );
};

export default TestAPI;
