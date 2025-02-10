import "./ImageSelector.css";

interface ImageSelectorProps {
  imageUrls: string[];
  onClick: (url: string) => void;
}

export const ImageSelector = ({ imageUrls, onClick }: ImageSelectorProps) => {
  return (
    <div>
      <ul className="image-container">
        {imageUrls.map((url: string, index: number) => (
            <li key={`image-selector-{${index}}`} className="images">
            <img className="photo" src={url} onClick={() => onClick(url)} />
          </li>
        ))}
      </ul>
    </div>
  );
};
