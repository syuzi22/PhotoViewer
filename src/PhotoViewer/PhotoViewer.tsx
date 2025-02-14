import './PhotoViewer.css';

interface PhotoViewerProps {
  url: string;
}

export const PhotoViewer = ({ url }: PhotoViewerProps) => {
  return (
    <div className="viewer">
      <img src={url} data-testid="image" />
    </div>
  );
};
