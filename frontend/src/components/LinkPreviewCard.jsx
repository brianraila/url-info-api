import React from "react";

const LinkPreviewCard = ({ data, error, url }) => {
  if (error) {
    return <a href={url} className="only-link" target="_blank">{url}</a>;
  }

  return (
    <a href={url} className="link-preview" target="_blank">
      {data.image && <img src={data.image}></img>}
      <div className="link-preview-data">
      {data.title && <div className="title">{data.title}</div>}
      {data.description && <div className="desc">{data.description}</div>}
      {data.domain && <div className="domain">{data.domain}</div>}
      </div>
    </a>
  );
};

export default LinkPreviewCard;
