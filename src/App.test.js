import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

jest.mock("./services/photoService");

it("should call photo service to get photos", async () => {
  const photoService = await import("./services/photoService");

  photoService.getPhotos = jest.fn();

  render(<App />);

  expect(photoService.getPhotos).toHaveBeenCalledWith();
});
