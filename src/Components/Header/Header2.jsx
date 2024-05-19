import React from 'react'
import './header.scss';
import header_img from '../../assets/header-img.png';
import { Link } from 'react-router-dom';

const Header2 = (props) => {
  return (
    <>
      <div className="cb_header2">
        <div className="cb_header2_content">
          <div className="cb_header2_content-quote">
            <h1 className='gradient__text'>'Once you learn to read, you will be forever free.'</h1>
            <p>- Frederick Douglass</p>
          </div>
          <div className="cb_header2_content-img">
            <img src={header_img} alt="" />
          </div>
        </div>
        {props.isLoggedIn
          ? <></>
          : <div className="cb_header-button">
          <Link to="/signup"><button type="button">Start Reading!</button></Link>
        </div>}
      </div>
    </>
  )
}

export default Header2