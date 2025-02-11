import { render,screen } from '@testing-library/react'
import { PhotoViewer } from './PhotoViewer/PhotoViewer';
import App from './App';
import { imageUrls } from "./utils";

test('renders React Photo Viewer text', () => {
    const { getByText } = render(<App />);
    const textElement = getByText(/React Photo Viewer/i);
    expect(textElement).toBeVisible();
});

test('renders React Photo Viewer image', () => {
    render(<PhotoViewer url='https://picsum.photos/id/600/1600/900.jpg'/>);
    const imageElement = screen.getByTestId('image') as HTMLImageElement;
    expect(imageElement).toBeVisible();
});

// A unit test to check our imageUrl generation code - 
// for me, this might check that the first link is what I expect and that it doesn’t include the ‘broken’ images.

test('getImageUrls generates expected images',() => {
    const url = imageUrls[0];
    expect(url).toBe("https://picsum.photos/id/600/1600/900.jpg");
});

/*test('getImageUrls to not include broken images',() => {
    const url = imageUrls[brokenImages[0]];
    expect(url).toBe(undefined);

});*/