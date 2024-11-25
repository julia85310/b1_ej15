export default function ImageGallery(){
    const images = [
        'https://i.imgur.com/r7IuN4i.jpeg',
        'https://i.imgur.com/OjlNjxJ.jpeg',
        'https://i.imgur.com/PELcLGW.jpeg'
    ];
    return<>
        {images.map((image, index) =>
            <img
                key = {index}
                src = {image}
                height= {300}
            ></img>
        )}
    </>
}