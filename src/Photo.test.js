import React from "react";

import { render } from "@testing-library/react";
import Photo from "./Photo";

it("should render image", () => {
  const expectedThumbnailUrl = "expectedThumbnailUrl";
  const expectedTitle = "expectedTitle";

  const { container } = render(
    <Photo id={1} title={expectedTitle} thumbnailUrl={expectedThumbnailUrl} />
  );

  const photo = container.querySelector("img");

  expect(photo).not.toBeNull();

  expect(photo.getAttribute("src")).toEqual(expectedThumbnailUrl);
  expect(photo.getAttribute("alt")).toEqual(expectedTitle);
});
