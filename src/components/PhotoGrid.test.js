import React from "react";

import { render } from "@testing-library/react";
import PhotoGrid from "./PhotoGrid";

describe("with photos passed", () => {
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

  it("should render all images", () => {
    const { container } = render(<PhotoGrid photos={[photo, photo2]} />);

    const photos = container.querySelectorAll("img");

    expect(photos).toHaveLength(2);
  });
});

describe("with no photos passed", () => {
  it("should not render", () => {
    const { container } = render(<PhotoGrid photos={[]} />);

    const photos = container.querySelectorAll("img");

    expect(photos).toHaveLength(0);
  });
});
