import React from "react";
import Photo from "./Photo";

export default function PhotoGrid({ photos }) {
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {photos && photos.length
        ? photos.map(photo => (
            <Photo
              key={photo.id}
              id={photo.id}
              title={photo.title}
              url={photo.url}
              thumbnailUrl={photo.thumbnailUrl}
            />
          ))
        : null}
    </div>
  );
}