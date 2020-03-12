import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

jest.mock("./services/photoService");

let photoService;

beforeEach(async () => {
  photoService = await import("./services/photoService");

  photoService.getPhotos = jest.fn().mockResolvedValue([]);
});

it("should display header text", () => {
  const { container } = render(<App />);

  const header = container.querySelector("h1");

  expect(header).not.toBeNull();
  expect(header.textContent).toEqual("Gallery");
});

it("should call photo service to get photos", async () => {
  render(<App />);

  expect(photoService.getPhotos).toHaveBeenCalledWith();
});
