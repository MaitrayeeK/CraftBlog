import React, { useState } from 'react'
import './user.scss';
import Layout from '../Layout/Layout'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import { ig, fb, tw, yt } from '../../assets/index';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const UserProfile = (props) => {
    console.log(props);
    const navigate = useNavigate();
    const [userData, userDoc, userBlogs, genblogs] = useSelector((state) => [state.getUser.user, state.getUser.doc, state.getUser.blogs, state.getUser.genblogs]);
    console.log(userData, userDoc, userBlogs, genblogs);
    // console.log(userDoc.data());
    const [tabvalue, setTabValue] = useState("1");

    const handleChange = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <>
            <Layout>
                <div className="cb_userprofile">
                    <div className="cb_userprofile_content">
                        <div className="cb_userprofile_content-image-username">
                            <div className="cb_userprofile_content-image">
                                <img src='https://picsum.photos/200/300' />
                            </div>
                            <div className="cb_userprofile_content-username">
                                <h1>{userDoc.data().user_name}</h1>
                            </div>
                        </div>
                        <div className="cb_userprofile_content-details">
                            <TabContext value={tabvalue}>
                                <Tabs value={tabvalue} onChange={handleChange} aria-label="icon tabs example">
                                    <Tab /*icon={<PhoneIcon />}*/ label="Profile" aria-label="phone" value="1" />
                                    <Tab /*icon={<FavoriteIcon />}*/ label="Blog" aria-label="favorite" value="2" />
                                    <Tab /*icon={<PersonPinIcon />}*/ aria-label="person" value="3" />
                                </Tabs>
                                <TabPanel value="1">
                                    <div className="cb_userprofile_content-details_info">
                                        <div className="cb_userprofile_content-details_info_fullname">
                                            <p>{userDoc.data().first_name + ' ' + userDoc.data().last_name}</p>
                                        </div>
                                        <div className="cb_userprofile_content-details_info_bio">
                                            <p>{userDoc.data().bio ? userDoc.data().bio : ''}</p>
                                        </div>
                                        <div className="cb_userprofile_content-details_info_location">
                                            {/* <p>Location</p> */}
                                        </div>
                                        <div className="cb_userprofile_content-details_info_website">
                                            {/* <p>Website</p> */}
                                        </div>
                                        <div className="cb_userprofile_content-details_info_a">
                                            <p>Annonymus</p>
                                            <div className="checkbox-wrapper-5">
                                                <div className="check">
                                                    <input id="check-5" type="checkbox" />
                                                    <label for="check-5"></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="cb_userprofile_content-details_info-buttons">
                                            <button>Update profile</button>
                                        </div>
                                        <div className="cb_userprofile_content-details_info_social">
                                            <p><a><img src={ig} /></a>
                                                <a><img src={fb} /></a>
                                                <a><img src={tw} /></a>
                                                <a><img src={yt} /></a></p>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel value="2">
                                    <div className="cb_userprofile_content-details_info">
                                        <div className="cb_userprofile_content-details_info-buttons">
                                            <button>Add new</button>
                                        </div>
                                        {userBlogs.map((blog) => (
                                            <div className="cb_userprofile_content-details_info-blogs">
                                                <div className="cb_userprofile_content-details_info-blogs-hd">
                                                    <h2>{blog.data().title}</h2>
                                                    <p>31 January 2023</p>
                                                </div>
                                                <p>{blog.data().content}</p>
                                            </div>
                                        ))}
                                    </div>
                                </TabPanel>
                                <TabPanel value="3">
                                    <div className="cb_userprofile_content-details_info">
                                        <div className="cb_userprofile_content-details_info-buttons">
                                            <Link to="/generateBlog"><button>Generate new</button></Link>
                                        </div>
                                        {genblogs.map((blog) => (
                                            <div className="cb_userprofile_content-details_info-blogs">
                                                <div className="cb_userprofile_content-details_info-blogs-hd" onClick={() => {
                                                    navigate('/blog',{state: 
                                                        {blogId: blog.id,
                                                        blogType: 'genblog',}});
                                                }}>
                                                    <h2>{blog.data().title}</h2>
                                                    <p>31 January 2023</p>
                                                </div>
                                                {/* <p>{blog.data().content}</p> */}
                                            </div>
                                        ))}
                                    </div>
                                </TabPanel>
                            </TabContext>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default UserProfile