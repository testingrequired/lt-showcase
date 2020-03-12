import React from "react";
import "./App.css";
import { getPhotos } from "./services/photoService";
import PhotoGrid from "./components/PhotoGrid";

function App() {
  const [photos, setPhotos] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [maxPhotos] = React.useState(100);

  React.useEffect(() => {
    (async () => {
      const results = await getPhotos();

      setPhotos(results);
      setIsLoading(false);
    })();
  }, []);

  return (
    <div>
      <h1>Gallery</h1>

      {isLoading ? (
        <Loading />
      ) : (
        <PhotoGrid photos={photos.slice(0, maxPhotos)} />
      )}
    </div>
  );
}

function Loading() {
  return <div style={{ textAlign: "center" }}>Loading...</div>;
}

export default App;
