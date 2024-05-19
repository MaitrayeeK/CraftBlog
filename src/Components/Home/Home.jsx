import React from 'react'
import Layout from '../Layout/Layout'
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'
import Header2 from '../Header/Header2'
import Blogs from '../Blogs/Blogs'
import { useSelector } from 'react-redux'

const Home = (props) => {

    return (
        <>
            <Layout isLoggedIn={props.isLoggedIn}>
                <div className="gradient-bg">
                    <Header isLoggedIn={props.isLoggedIn}/>
                </div>
                <Header2 isLoggedIn={props.isLoggedIn}/>
                {/* <Blogs /> */}
            </Layout>
        </>
    )
}

export default Home