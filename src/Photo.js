import React from "react";

export default function Photo({ id, title, url, thumbnailUrl }) {
  return (
    <div data-testid={`photo-${id}`}>
      <img src={thumbnailUrl} alt={title} />
    </div>
  );
}
