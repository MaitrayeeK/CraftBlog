import React from 'react'
import './header.scss';
import Spline from '@splinetool/react-spline';
import img from '../../assets/writing.png';
import { Link } from 'react-router-dom';

const Header = (props) => {

  return (
    <div className='cb_header' id='home'>
      <div className="cb_header-row">
        <div className="cb_header-content">
          <div className="cb_header-content_quote">
            <h1 className='gradient__text'>EITHER WRITE SOMETHING WORTH READING OR DO SOMETHING WORTH WRITING.</h1>
            <p>- Benjamin Franklin</p>
          </div>
          <div className="cb_header-content_subcontent">
            <p>Unleash your creativity of writing with CraftBlogs!</p>
          </div>
        </div>
        <div className="cb_header-img">
          <img src={img} />
          {/* <Spline scene="https://prod.spline.design/FvXob7JJmXTpm4yk/scene.splinecode" /> */}
        </div>
      </div>
      {props.isLoggedIn
        ? <></>
        : <div className="cb_header-button">
          <Link to="/signup"><button type="button">Let's Start!</button></Link>
        </div>}

    </div>
  )
}

export default Header