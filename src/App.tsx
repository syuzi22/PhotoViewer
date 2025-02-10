import { useState } from "react";
import { PhotoViewer } from "./PhotoViewer/PhotoViewer";
import "./App.css";
import { ImageSelector } from "./ImageSelector/ImageSelector";
import { imageUrls } from "./utils.ts";

function App() {
  const [selectedImage, setSelectedImage] = useState(imageUrls[0]);

  const handleClick = (url: string) => {
    setSelectedImage(url);
  };

  return (
    <div className="photo-viewer">
      <h1>React Photo Viewer</h1>
      <PhotoViewer url={selectedImage} />
      <ImageSelector imageUrls={imageUrls} onClick={handleClick} selectedImage={selectedImage}/>
    </div>
  );
}

export default App;
