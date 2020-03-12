import React from "react";

import { render } from "@testing-library/react";
import Photo from "./Photo";

it("should render image", () => {
  const photo = {
    id: 1,
    title: "expectedTitle",
    thumbnailUrl: "expectedThumbnailUrl"
  };

  const { getByAltText } = render(
    <Photo
      id={photo.id}
      title={photo.title}
      thumbnailUrl={photo.thumbnailUrl}
    />
  );

  expect(getByAltText(photo.title)).toHaveAttribute("src", photo.thumbnailUrl);
});
