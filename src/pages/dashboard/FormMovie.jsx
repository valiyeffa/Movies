import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const FormMovie = ({editdata ,sendData}) => {
    const [img,setImg] = useState(editdata?editdata.img:"");
    const [title,setTitle] = useState(editdata?editdata.title:"");
    const [genre,setGenre] = useState(editdata?editdata.genre:"");
    const [releaseYear,setYear] = useState(editdata?editdata.releaseYear:"");

    const formSubmited =(e)=>{
        e.preventDefault();
        if (!img||!title||!releaseYear||!genre) {
            swal("Please fill input","","warning")
        }else{
            sendData({img, title, releaseYear , genre});
        }
    }

  return (
    <div className='d-flex align-items-center justify-content-center flex-column'>
        <div className="col-5">
                <form onSubmit={formSubmited}>
                    <div className="mb-3">
                        <label className="form-label">Image url</label>
                        <input type="text" value={img} className="form-control" onChange={e=>setImg(e.target.value)}/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Genre</label>
                        <input type="text" value={genre} className="form-control" onChange={e=>setGenre(e.target.value)}/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label"> Title</label>
                        <input type="text" value={title} className="form-control" onChange={e=>setTitle(e.target.value)} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">ReleaseYear</label>
                        <input type="text" value={releaseYear} className="form-control" onChange={e=>setYear(e.target.value)}/>
                    </div>

                    <Link to='/dashboard' className="btn btn-dark mx-2">Back</Link>
                    <button type="submit" className="btn btn-dark">{editdata?"Edit":"Add new"}</button>
                </form>

            </div>
    </div>
  )
}

export default FormMovie