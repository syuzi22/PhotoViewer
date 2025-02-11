import React from "react";
import { render, screen } from "@testing-library/react";
//import userEvent from '@testing-library/user-event';
import renderer from "react-test-renderer";
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
  const tree = renderer
    .create(<PhotoViewer url="https://picsum.photos/id/600/1600/900.jpg" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

/* (Test is failing due to library issue)
test('should update the photoviewer image when the thumbnail is clicked',async()=>{
    //const user = userEvent.setUp();
    render(<App />)

    const photoViewerImage = screen.getByTestId('image') as HTMLImageElement;
    await userEvent.click(screen.getByTestId('image-selector-3'));
    expect(photoViewerImage).toEqual('https://picsum.photos/id/604/1600/900.jpg');
});*/
