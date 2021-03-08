import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { Link } from 'react-scroll'

export default function Footer() {
    return (
        <>
            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <h6>About</h6>
                            <p className="text-justify">Website built by MLWeb ( Michael Lacroix )</p>
                        </div>
                        <div className="col-xs-6 col-md-3">
                            <h6>Categories</h6>
                            <ul className="footer-links">
                                <li><Link to="carousel" activeClass="active" offset={-100} smooth={true} duration={500}>Home</Link></li>
                                <li><Link to="categories" activeClass="active" spy={true} smooth={true} offset={-100} duration={500}>Projects</Link></li>
                                <li><Link to="about" activeClass="active" offset={-100} smooth={true} duration={500}>About</Link></li>
                                <li><Link to="contact" activeClass="active" offset={-100} smooth={true} duration={500}>Contact</Link></li>
                            </ul>
                        </div>

                    </div>
                    <hr />
                </div>
                <div className="container">
                    <div className="row mt-3">
                        <div className="col-md-8 col-sm-6 col-xs-12">
                            <p className="copyright-text">Copyright &copy; 2020 All Rights Reserved by
                <code> MLWeb </code>
                            </p>
                        </div>

                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <ul className="social-icons">
                                <li><a className="facebook" href="https://www.facebook.com" target="_blank"><i className="fa fa-facebook"></i></a></li>
                                <li><a className="twitter" href="https://www.twitter.com" target="_blank"><i className="fa fa-twitter"></i></a></li>
                                <li><a className="linkedin" href="https://www.linkedin.com" target="_blank"><i className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
