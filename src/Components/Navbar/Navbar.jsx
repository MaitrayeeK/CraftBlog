import React, { useEffect, useState } from 'react';
import './navbar.scss';
import logolight from '/logo-light.svg';
import logodark from '/logo-dark.svg';
import ig from '../../assets/icons/instagram.svg';
import fb from '../../assets/icons/facebook.svg';
import tw from '../../assets/icons/twitter.svg';
import yt from '../../assets/icons/youtube.svg';
import NavbarSticky from './NavbarSticky';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../Functionalities/Features/toggleThemeSlice';

const Navbar = () => {
    
    const [theme, toggleThemeChkbox]  = useSelector((state) => [state.toggleTheme.theme, state.toggleTheme.value]);
    const dispatch = useDispatch();

    useEffect(() => {
        document.body.className = theme;
        document.getElementById("toggleThemeChkbox").checked = toggleThemeChkbox;
    }, [theme]);

    return (
        <>
            <div className='cb_navbar'>
                <div className="cb_navbar-top">
                    <div className='cb_navbar-top-logo'>
                        <Link to="/"> { theme === "light-theme" ? <img src={logodark} /> : <img src={logolight} />} </Link>
                    </div>
                    <div className="cb_navbar-top-social_menu">
                        <p>
                            <div className="checkbox-wrapper-54">
                                <label className="switch">
                                    <input type="checkbox" id="toggleThemeChkbox" name="theme" value={toggleThemeChkbox} onChange={(e) => dispatch(toggleTheme(e))} />
                                    <span className="slider" />
                                </label>
                            </div>
                            <a><img src={ig} /></a>
                            <a><img src={fb} /></a>
                            <a><img src={tw} /></a>
                            <a><img src={yt} /></a>
                        </p>
                    </div>
                </div>
            </div>
            {/* <NavbarSticky/> */}
        </>
    )
}

export default Navbar