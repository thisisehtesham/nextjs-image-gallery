'use client'
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const PAGE_SIZE = 500;

interface Photo {
    id: number;
    albumId: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

interface SearchParams {
    page?: number;
}

const Pagination: React.FC = () => {
    const { page } = useSearchParams() as SearchParams;
    const [photos, setPhotos] = useState<Photo[]>([]);
    const [currentPage, setCurrentPage] = useState(page || 1);
    const [totalPhotos, setTotalPhotos] = useState(0);

    useEffect(() => {
        const fetchPhotos = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_page=${currentPage}&_limit=${PAGE_SIZE}`);
        const data = await response.json();

        setPhotos(data);
        setTotalPhotos(data.length);
    };

        fetchPhotos();
    }, [currentPage]);

    const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
};

    return (
        <div>
            <ul>
                {photos.map((photo) => (
                <li key={photo.id}>
                <img src={photo.thumbnailUrl} alt={photo.title} />
                </li>
            ))}
            </ul>

            <div>
                <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
                <span>{currentPage}</span>
                <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPhotos}>Next</button>
            </div>
        </div>
    );
};

export default Pagination;
