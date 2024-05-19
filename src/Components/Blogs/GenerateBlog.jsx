import React, { useState } from 'react'
import Layout from '../Layout/Layout'
import { generate } from '../../Functionalities/OpenAI/Request';
import { useSelector } from 'react-redux';
import { addGenBlogData } from '../../Functionalities/Firebase/AddData';
import Markdown from 'react-markdown';

const GenerateBlog = () => {

    const user = useSelector((state) => state.getAuth.user);
    const [params, setParams] = useState({});
    const [data, setData] = useState({ user_id: user.uid, is_published: false, });
    const [displayString, setDisplayString] = useState('');

    const handleChange = (e) => {
        console.log('here handlechange');
        setParams({ ...params, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("here");
        console.log(data);
        console.log(params);
        const blogData = { ...data, ...params }
        console.log(blogData);
        if (!data.content) {
            console.log("here2");
            alert("Please generate the blog first.");
        } else {
            const result = addGenBlogData(blogData);
            console.log(result);
        }
        setParams({});
        setDisplayString('')
        setData({ user_id: user.uid, is_published: false, });
    }

    const PostBlog = async (e) => {
        e.preventDefault();
        console.log("here");
        data.is_published = true;
        console.log(data);
        console.log(params);
        const blogData = { ...data, ...params }
        console.log(blogData);
        if (!data.content) {
            console.log("here2");
            alert("Please generate the blog first.");
        } else {
            const result = addGenBlogData(blogData);
            console.log(result);
        }
        setParams({});
        setDisplayString('')
        setData({ user_id: user.uid, is_published: false, });
    }

    const GenerateBlog = async (e) => {
        e.preventDefault();
        const paramsContent = JSON.stringify(params);
        const content = await generate(paramsContent);
        let charIndex = 0, prevString = '';
        const timer = setInterval(() => {
            prevString = prevString + content[charIndex];
            setDisplayString(prevString);
            setData({ ...data, content: prevString });
            charIndex++;
            if (charIndex >= content.length) {
                clearInterval(timer);
            }
        }, 10);
        setData({ ...data, params });
        console.log(data);
        return () => clearInterval(timer);
    }

    return (
        <>
            <Layout>
                <div className="cb_generateblog">
                    <div className="cb_generateblog_content">
                        <div className="cb_generate_content-parameters">
                            <div className="cb_generateblog_content-parameters_title">
                                <h1>Generate Blog</h1>
                            </div>
                            <div className="cb_generateblog_content-parameters_form">
                                <form onSubmit={handleSubmit}>
                                    <div className="cb_generateblog_content-parameters_form_content title-subtitle row">
                                        <input type="text" id="title" name="title" placeholder="Title" onChange={handleChange} required />
                                        <div data-tip="Separate with comma(,)in case of multiple">
                                            <input type="text" id="subtitle" name="subtitle1" placeholder="Subtitles" onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="cb_generateblog_content-parameters_form_content row">
                                        <div className="insipiration">
                                            <input type="text" id="inspiration" name="inspiration" placeholder="Add inspiration to generate blog" onChange={handleChange} />
                                            <div data-tip="Add any famuos blogger to get the inspiration from their blogs.">
                                                <input type="text" id="inspiredby" name="inspiredby" placeholder="Inspired by" onChange={handleChange} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cb_generateblog_content-parameters_form_content row">
                                        <div className="tags">
                                            <div data-tip="Add tags to include in blog.">
                                                <input type="text" id="tag1" name="tag1" placeholder="Tag" onChange={handleChange} />
                                                <input type="text" id="tag2" name="tag2" placeholder="Tag" onChange={handleChange} />
                                                <input type="text" id="tag3" name="tag3" placeholder="Tag" onChange={handleChange} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cb_generateblog_content-parameters_form_content row">
                                        <input type="text" id="maxlen" name="maxlen" placeholder="Maximum length in words" onChange={handleChange} />
                                        <input type="text" id="minlen" name="minlen" placeholder="Minimum length in words" onChange={handleChange} />
                                    </div>
                                    <div className="cb_generateblog_content-parameters_form_submit">
                                        <button onClick={GenerateBlog}>Generate</button>
                                    </div>
                                    <div>
                                        <Markdown>
                                            {displayString}
                                        </Markdown>
                                    </div>
                                    <div className="cb_userprofile_content-details_info-buttons">
                                        <button type='submit'>Save</button>
                                        <button onClick={PostBlog}>Post</button>
                                        {/* <button>Generate new</button> */}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default GenerateBlog