export async function getAllPhotos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/photos");

  return await response.json();
}
