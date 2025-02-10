import "./ImageSelector.css";

interface ImageSelectorProps {
  imageUrls: string[];
  onClick: (url: string) => void;
  selectedImage: string;
}

export const ImageSelector = ({ imageUrls, onClick, selectedImage }: ImageSelectorProps) => {
  return (
    <div>
      <div>Select your photo</div>
      <ul className="image-container">
        {imageUrls.map((url: string, index: number) => (
          <li key={`image-selector-{${index}}`} className={`image ${url === selectedImage ? 'image--selected': ''}`}>
            <img className="photo" src={url} onClick={() => onClick(url)} />
          </li>
        )
      )}
      </ul>
    </div>
  );
};
