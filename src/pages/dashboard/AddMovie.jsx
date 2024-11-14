import React from 'react'
import FormMovie from './FormMovie'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { movieAddToDataBase_Action } from '../../tools/actions/movieAction';

const AddMovie = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <div className='add-movie '>
            <h1 className='alert-dark my-3 text-center'>Add Movie</h1>
            <FormMovie sendData={data => {
                dispatch(movieAddToDataBase_Action(data));
                navigate('/dashboard');
            }} /> 
        </div>
    )
}

export default AddMovie