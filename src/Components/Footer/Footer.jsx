import React from 'react';
import './footer.scss';
import ig from '../../assets/icons/instagram.svg';
import fb from '../../assets/icons/facebook.svg';
import tw from '../../assets/icons/twitter.svg';
import yt from '../../assets/icons/youtube.svg';

const Footer = () => {
    return (
        <>
            <div className="cb_footer">
                <div className="cb_footer-content">
                    <div className="cb_footer-content_cpr">
                        <p>© 2021 CraftBlogs. All rights reserved.</p>
                    </div>
                    <div className="cb_footer-content-social_menu">
                        <p>
                            <a><img src={ig} /></a>
                            <a><img src={fb} /></a>
                            <a><img src={tw} /></a>
                            <a><img src={yt} /></a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer