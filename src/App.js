import React from "react";
import "./App.css";
import { getPhotos } from "./services/photoService";
import PhotoGrid from "./components/PhotoGrid";

function App() {
  const [photos, setPhotos] = React.useState([]);
  const [maxPhotos] = React.useState(100);

  React.useEffect(() => {
    (async () => {
      const results = await getPhotos();

      setPhotos(results);
    })();
  }, []);

  return (
    <div>
      <h1>Gallery</h1>
      <PhotoGrid photos={photos.slice(0, maxPhotos)} />
    </div>
  );
}

export default App;
