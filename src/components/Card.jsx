import React from 'react'

const Card = ({ alldata }) => {
    return (
        <div className='col-6 col-sm-3 col-md-3 col-lg-2 single-card'>
            <div className="card">
                <img style={{ height: "200px", objectFit: "contain" }} src={alldata.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <div className="card-body-head">
                        <h6 className="card-tv ">TV-G</h6>
                        <h6 className="card-year">{alldata.releaseYear}</h6>
                    </div>
                    <h6 className="card-text">{alldata.genre}</h6>
                    <h5 className="card-title">{alldata.title.slice(0, 17)}...</h5>
                </div>
            </div>
        </div>
    )
}

export default Card