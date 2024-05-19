import React, { useState } from 'react'
import Layout from '../Layout/Layout'
import Editor from './MyEditor'

const AddBlog = () => {

    return (
        <>
            <Layout>
                <div className='cb__editor-tab'>
                    <Editor />
                </div>
            </Layout>
        </>
    )
}

export default AddBlog