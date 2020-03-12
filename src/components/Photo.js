import React from "react";

export default function Photo({ id, title, url, thumbnailUrl }) {
  return (
    <div>
      <a href={url} target="_blank" rel="noreferrer noopener">
        <img src={thumbnailUrl} alt={title} />
      </a>
    </div>
  );
}
