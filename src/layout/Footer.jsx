import React from 'react'
import { MdOutlineLanguage } from "react-icons/md";

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <footer>
                    <div className="row">
                        <div className="foot-left-side col-md-5 mb-5">
                            <div>
                                <h5>Questions? Call 0850-380-6444</h5>
                                <p>Format for custom post types that are not book or <br /> you can use else if to specify a second post type the <br /> same way as above.</p>
                                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                                    <button className='lang-btn'>English <MdOutlineLanguage /></button>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-2 offset-md-1  mb-3">
                            <h5>DIGIFLEX</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Digiflex</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Devices</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Blog</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Contact</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-md-2 mb-3">
                            <h5>SUPPORT</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQ</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Help Center</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Support</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Account</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-md-2 mb-3">
                            <h5>POLICIES</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Privacy Policy</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Terms of Use</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Legal Noticies</a></li>
                            </ul>
                        </div>

                    </div>
                    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-5 border-top">
                        <p>© 2024 © 2021 Digiflex | Online Movie Streaming</p>
                        <p>Site created by Themezinho</p>
                    </div>
                </footer>
            </div>

        </div>
    )
}

export default Footer