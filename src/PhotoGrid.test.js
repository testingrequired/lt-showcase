import React from "react";

import { render } from "@testing-library/react";
import PhotoGrid from "./PhotoGrid";

it("should render images", () => {
  const photo = {
    id: 1,
    title: "expectedTitle",
    thumbnailUrl: "expectedThumbnailUrl"
  };

  const photo2 = {
    id: 2,
    title: "expectedTitle2",
    thumbnailUrl: "expectedThumbnailUrl2"
  };

  const { getByAltText } = render(<PhotoGrid photos={[photo, photo2]} />);

  expect(getByAltText(photo.title)).toHaveAttribute("src", photo.thumbnailUrl);
  expect(getByAltText(photo2.title)).toHaveAttribute(
    "src",
    photo2.thumbnailUrl
  );
});
