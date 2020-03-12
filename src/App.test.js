import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

jest.mock("./photoService");

it("should call photo service to get photos", async () => {
  const photoService = await import("./photoService");

  photoService.getPhotos = jest.fn();

  render(<App />);

  expect(photoService.getPhotos).toHaveBeenCalledWith();
});
