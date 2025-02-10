export const ImageSelector = ({imageUrls, onClick}) => {
    // const [selectedImage, setSelectedImage] = useState(imageUrls[0]);
    // const handleClick = (url: string) => {
    //     setSelectedImage(url);
    // }

    return (
        <div>
            <ul>
                {imageUrls.map((url: string, index: number) => (
                    <li key={`image-selector-{${index}}`}>
                        <img src={url} onClick={() => onClick(url)}/> 
                    </li>
                ))}
            </ul>
        </div>
    )

}