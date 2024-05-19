import React from 'react';
import './navbar.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { SignOut } from '../../Functionalities/Firebase/Authentication';
import { getAuth } from '../../Functionalities/Features/getAuthdataSlice';

const NavbarSticky = (props) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.getAuth.isLoggedIn);

    const handleSignOut = () => {
        SignOut()
            .then((data) => {
                console.log(data);
                dispatch(getAuth({isLoggedIn: false, user: {},}))
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <>
            <div className="cb_navbar-bottom">
                <p><a href='#home'>Home</a></p>
                <p><a href='#blogs'>Blogs</a></p>
                <p><a href='#useai'>Use AI</a></p>
                <p><a href='#aboutus'>About us</a></p>
                {isLoggedIn
                    ? <><p className='profileImg'><Link to='/profile'><img src="https://picsum.photos/200/300" alt="" /></Link></p><p><a href='#aboutus' onClick={handleSignOut}>Logout</a></p></>
                    : <Link to="/login"><button type="button">Login</button></Link>}
            </div>
        </>
    )
}

export default NavbarSticky