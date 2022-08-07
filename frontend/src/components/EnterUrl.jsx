import React from "react";

const EnterUrl = () => {
  return (
    <div
      style={{
        height: "50vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Enter a URL to view its link preview
      <img src="./enterurl.svg" alt="" />
    </div>
  );
};

export default EnterUrl;
