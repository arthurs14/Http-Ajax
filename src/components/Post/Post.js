import React from 'react';

// Helps functional components become route aware
// import { withRouter } from 'react-router-dom';

import './Post.css';

const post = ({ clicked, title, author }) => (
    <article className="Post" onClick={clicked}>
        <h1>{title}</h1>
        <div className="Info">
            <div className="Author">{author}</div>
        </div>
    </article>
);


export default post;