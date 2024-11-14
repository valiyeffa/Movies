import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { movieDelToDataBase_Action } from '../../tools/actions/movieAction';
import slugify from 'slugify';

const Dashboard = () => {
    const movie = useSelector(p => p);
    const dispatch = useDispatch();

    return (
        <div className='dashboard'>
            <div className="d-flex align-items-center justify-content-center">
                <div className="col-9">
                    <Link to="/dashboard/add" className="btn btn-dark">Add movie</Link>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Image</th>
                                <th scope="col">Title</th>
                                <th scope="col">Release Year</th>
                                <th scope="col">Edit</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {movie.map((item, i) => (
                                <tr key={item.id}>
                                    <th scope="row">{i + 1}</th>
                                    <td><img height={100} src={item.img} alt={item.title} /></td>
                                    <td>{item.title}</td>
                                    <td>{item.releaseYear}</td>
                                    <td><Link to={`/dashboard/edit/${slugify(item.title)}`} className='btn btn-warning'>Edit</Link></td>
                                    <td><button className='btn btn-danger' onClick={()=>{dispatch(movieDelToDataBase_Action(item.id))}}>X</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Dashboard