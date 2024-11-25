
const images = [
    "https://i.imgur.com/Mx7dA2Y.jpg",
    'https://i.imgur.com/OjlNjxJ.jpeg',
    'https://i.imgur.com/PELcLGW.jpeg'
];

function Image({imagen}){
    return <img
        src = {imagen}
        height= {300}
    />
}

export default function ImageGallery(){
    
    return<>
        {images.map((img, index) =>
            <Image
                key={index}
                imagen={img}
            />
        )}
    </>
}