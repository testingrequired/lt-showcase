import queryString from "query-string";

export async function getAllPhotos(params = {}) {
  const qs = queryString.stringify(params);
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/photos${qs ? `?${qs}` : ""}`
  );

  return await response.json();
}
