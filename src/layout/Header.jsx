import React from 'react'
import { FaSearch } from "react-icons/fa";
import { GoBookmark } from "react-icons/go";
import { MdOutlineAccountCircle } from "react-icons/md";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <div className='header-bg'>
                <nav className="navbar navbar-expand-lg my-3">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#"><img src="http://digiflex.themezinho.net/wp-content/uploads/2021/08/logo@2x.png" width={50} alt="" /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link " aria-current="page" href="#">HOME</a>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to='/'>MOVIES</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">TV SHOWS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">AUDIOBOOKS</a>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">DASHBOARD</Link>
                                </li>
                            </ul>
                            <div className="left-side d-flex">
                                <a href="#"><FaSearch /></a>
                                <a href="#"><GoBookmark /></a>
                                <Link to='/login'>ACCOUNT <span className='acount-icon'><MdOutlineAccountCircle /></span></Link>
                            </div>
                        </div>
                    </div>
                </nav>

                <div className="header-body">
                    <h1>Movies <span>.</span></h1>
                    <p>All new released Hollywood and world movies here to watch</p>
                </div>
            </div>
        </div>

    )
}

export default Header