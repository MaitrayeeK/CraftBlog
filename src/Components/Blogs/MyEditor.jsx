import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';

const MyEditor = () => {
    const [value, setValue] = useState('')
    const handleChange = (content, delta, source, editor) => {
        console.log(content);
        setValue(content)
        console.log(editor.getContents()) // rich text
        document.getElementById('ans').append(content);
    }

    const toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block', 'clean', 'link'],             // toggled buttons
      
        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
        [{ 'direction': 'rtl' }],                         // text direction
      
        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      
        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'font': [] }],
        [{ 'align': [] }],
      ];

    return (
        <>
            <ReactQuill
                theme="bubble"
                value={value}
                modules={{ 
                    // syntax: true,
                    toolbar: toolbarOptions 
                }}
                onChange={handleChange}
                placeholder="Start typing..." />

                <div id='ans'>{value}</div>
        </>
    )
}

export default MyEditor