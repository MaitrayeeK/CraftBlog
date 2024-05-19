import React from 'react'
import './layout.scss';
import Navbar from '../Navbar/Navbar'
import NavbarSticky from '../Navbar/NavbarSticky'
import Footer from '../Footer/Footer'
import { useSelector } from 'react-redux';

const Layout = (props) => {
    
    return (
        <>
            <Navbar isLoggedIn={props.isLoggedIn} />
            <NavbarSticky isLoggedIn={props.isLoggedIn} />
            <div className="content" isLoggedIn={props.isLoggedIn} >
                {props.children}
            </div>
            <Footer isLoggedIn={props.isLoggedIn} />
        </>
    )
}

export default Layout