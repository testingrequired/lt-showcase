import React from "react";
import "./App.css";
import { getPhotos } from "./photoService";
import PhotoGrid from "./PhotoGrid";

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
      <PhotoGrid photos={photos} />
    </div>
  );
}

export default App;
