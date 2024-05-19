import React, { useEffect, useState } from 'react'
import './blogs.scss'
import Layout from '../Layout/Layout'
import like from '../../assets/icons/black-heart.svg'
import liked from '../../assets/icons/red-heart.svg'
import { useLocation, useParams, useSearchParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Markdown from 'react-markdown';

const OneBlog = () => {
    const { state } = useLocation();
    console.log(state);
    const [userBlogs, genblogs] = useSelector((state) => [state.getUser.blogs, state.getUser.genblogs]);
    const [blog, setBlog] = useState(genblogs.find((blog) => blog.id === state.blogId));
    console.log(blog);
    console.log(userBlogs, genblogs);

    useEffect(() => {
        if (state.blogType === 'genblog') {
            console.log('here');
            console.log(genblogs);
            genblogs.find(async (blog) => { 
                await blog.id === state.blogId ? setBlog(blog): setBlog({});
                console.log(blog) });
        }
    }, [])
    return (
        <>
            <Layout>
                <div className="cb_oneblog">
                    <div className="cb_oneblog_heading">
                        <h1 className='gradient__text'>
                            {blog.data().title}
                        </h1>
                    </div>
                    <div className="cb_oneblog_content">
                        <p>
                            <br></br>
                            <br></br>
                            {blog.data().subtitle}
                            <br></br>
                            <br></br>
                            <Markdown>
                                {blog.data().content}
                            </Markdown>
                        </p>
                    </div>
                    <div className="cb_oneblog_reaction">
                        <div className="cb_oneblog_reaction_like">
                            <p><img src={like} /></p>
                        </div>
                        {/* <div className="cb_oneblog_reaction_liked">
                            <p><img src={liked} /></p>
                        </div> */}
                        <div className="cb_oneblog_reaction_comment">
                            <p>Comment</p>
                        </div>
                        <div className="cb_oneblog_reaction_share">
                            <p>Share</p>
                        </div>
                    </div>
                    {/* <div className="cb_oneblog_comment-section">
                        <div className="cb_oneblog_comment-user">
                            <div className="cb_oneblog_comment-user_img">
                                <img src="https://picsum.photos/200/300" alt="" />
                            </div>
                            <div className="cb_oneblog_comment-user_info">
                                <div className="cb_oneblog_comment-user_name">
                                    <h4>MiliK</h4>
                                </div>
                                <div className="cb_oneblog_comment-user_comment">
                                    <p>Nice one!</p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </Layout>
        </>
    )
}

export default OneBlog