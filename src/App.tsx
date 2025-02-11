import { useState, useEffect } from "react";
import { PhotoViewer } from "./PhotoViewer/PhotoViewer";
import "./App.css";
import { ImageSelector } from "./ImageSelector/ImageSelector";

function App() {
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [urls, setUrls] = useState<string[]>([]);

  const apiUrl = "https://picsum.photos/v2/list";
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(apiUrl);
        if (!response) {
          throw new Error("Unable to fetch images");
        }

        const result = await response.json();
        const imageUrls: string[] = [];

        for (const image of result) {
          imageUrls.push(image.download_url);
        }

        setUrls(imageUrls);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [urls]);

  const handleClick = (url: string) => {
    setSelectedImage(url);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="photo-viewer">
      <h1>React Photo Viewer</h1>
      <PhotoViewer url={selectedImage} />
      <ImageSelector
        imageUrls={urls}
        onClick={handleClick}
        selectedImage={selectedImage}
      />
    </div>
  );
}

export default App;
