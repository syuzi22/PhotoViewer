import './PhotoViewer.css';

interface PhotoViewerProps {
  url: string;
}

export const PhotoViewer = ({ url }: PhotoViewerProps) => {
  return (
    <div className="viewer" data-testid="image">
      <img src={url} />
    </div>
  );
};
