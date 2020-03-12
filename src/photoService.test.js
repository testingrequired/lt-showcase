import { getAllPhotos } from "./photoService";

describe("photoService", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  describe("getAllPhotos", () => {
    const expectedPhoto1 = {
      albumId: 1,
      id: 1,
      title: "accusamus beatae ad facilis cum similique qui sunt",
      url: "https://via.placeholder.com/600/92c952",
      thumbnailUrl: "https://via.placeholder.com/150/92c952"
    };

    const expectedPhoto2 = {
      albumId: 2,
      id: 2,
      title: "reprehenderit est deserunt velit ipsam",
      url: "https://via.placeholder.com/600/771796",
      thumbnailUrl: "https://via.placeholder.com/150/771796"
    };

    const expectedResponse = [expectedPhoto1, expectedPhoto2];

    beforeEach(() => {
      fetch.mockResponseOnce(JSON.stringify(expectedResponse));
    });

    it("should call API", async () => {
      await getAllPhotos();

      expect(fetch).toBeCalledWith(
        "https://jsonplaceholder.typicode.com/photos"
      );
    });

    it("should return all photos", async () => {
      const response = await getAllPhotos();

      expect(response).toEqual(expectedResponse);
    });
  });
});
