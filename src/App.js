import React from "react";
import "./App.css";
import { getPhotos } from "./services/photoService";
import PhotoGrid from "./components/PhotoGrid";

function App() {
  const [photos, setPhotos] = React.useState();

  React.useEffect(() => {
    (async () => {
      const results = await getPhotos();

      setPhotos(results);
    })();
  }, []);

  return (
    <div>
      <h1>Gallery</h1>
      <PhotoGrid photos={photos} />
    </div>
  );
}

export default App;
