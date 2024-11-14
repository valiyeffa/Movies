import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../components/Card';

const MovieList = () => {
    const movieData = useSelector(p => p);

    return (
        <div className='movies-page'>
            <div className='container my-5'>
                <div className="row g-4">
                    {movieData.map(item => (
                        <Card alldata={item} key={item.id} />
                    ))}
                    
                </div>
            </div>
        </div>
    )
}

export default MovieList