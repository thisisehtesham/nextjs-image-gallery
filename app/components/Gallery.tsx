import Image from 'next/image';
import React from 'react'

interface Image {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

const Gallery = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos');
    const images: Image[] = await res.json();
    
    return (
        <div className='grid grid-rows-10 grid-cols-3 gap-4'>
            {images.map((image) => (
                <div className='group' key={image.id}>
                    <img className='rounded-t-xl group-hover:opacity-75' src={image.url} alt={image.title} />
                    <p className='bg-white text-gray-800 rounded-b-xl pl-3 font-bold group-hover:opacity-75'>{image.title}</p>
                </div>
            ))}
        </div>
        
    )
}

export default Gallery 