import { render, screen, waitFor  } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { PhotoViewer } from "./PhotoViewer/PhotoViewer";
import App from "./App";
import { imageUrls } from "./utils";

test("renders React Photo Viewer text", () => {
  const { getByText } = render(<App />);
  const textElement = getByText(/React Photo Viewer/i);
  expect(textElement).toBeVisible();
});

test("renders React Photo Viewer image", () => {
  render(<PhotoViewer url="https://picsum.photos/id/600/1600/900.jpg" />);
  const imageElement = screen.getByTestId("image") as HTMLImageElement;
  expect(imageElement).toBeVisible();
});

test("getImageUrls generates expected images", () => {
  const url = imageUrls[0];
  expect(url).toBe("https://picsum.photos/id/600/1600/900.jpg");
});

test("getImageUrls to not include broken images", () => {
  const brokenUrl = "https://picsum.photos/id/601/1600/900.jpg";
  expect(imageUrls).not.toContain(brokenUrl);
});

test("renders photoviewer image correctly", async () => {
  const { asFragment } = render(<PhotoViewer url="https://picsum.photos/id/600/1600/900.jpg" />)
  expect(asFragment).toMatchSnapshot();
});

test('should update the photoviewer image when the thumbnail is clicked', async()=>{
    render(<App />)
    const photoViewerImage = screen.getByTestId('image') as HTMLImageElement;
    expect(photoViewerImage.src).toEqual('https://picsum.photos/id/600/1600/900.jpg');
    const selectedPhoto = screen.getByTestId('image-selector-3');
    await userEvent.click(selectedPhoto);

    await waitFor(() => {
      expect(photoViewerImage).toBeInTheDocument();
      expect(photoViewerImage.src).toEqual('https://picsum.photos/id/604/1600/900.jpg');
      expect(selectedPhoto.parentElement?.className).toContain('image--selected');
    });
});
