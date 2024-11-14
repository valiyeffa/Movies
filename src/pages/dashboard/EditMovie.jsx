import React from 'react'
import FormMovie from './FormMovie'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import slugify from 'slugify';
import { movieEdittoDataBase_Action } from '../../tools/actions/movieAction';

const EditMovie = () => {
    const { slug } = useParams();
    const movie = useSelector(p => p);
    const filterMovie = movie.find(p => slugify(p.title) === slug);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <div className='add-movie'>
            <h1 className='alert-dark my-3 text-center'>Edit Movie</h1>
            <FormMovie editdata={filterMovie} sendData={data => {
                dispatch(movieEdittoDataBase_Action(filterMovie.id , data));
                navigate('/dashboard');
            }} />
        </div>
    )
}

export default EditMovie