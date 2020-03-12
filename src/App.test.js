import React from "react";
import { render, wait } from "@testing-library/react";
import App from "./App";

jest.mock("./services/photoService");

let photoService;

beforeEach(async () => {
  photoService = await import("./services/photoService");

  photoService.getPhotos = jest.fn().mockResolvedValue([]);
});

it("should display header text", async () => {
  const { container } = render(<App />);

  await wait(() => container.querySelector("h1"));

  const header = container.querySelector("h1");

  expect(header).not.toBeNull();
  expect(header.textContent).toEqual("Gallery");
});

it("should call photo service to get photos", async () => {
  const { getByTestId } = render(<App />);

  await wait(() => getByTestId("photoGrid"));

  expect(photoService.getPhotos).toHaveBeenCalledWith();
});
