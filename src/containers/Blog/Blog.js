import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
    }

    componentDidMount() {
        // usually takes url as an argument
        axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
            const posts = response.data.slice(0, 4);
            // can be used to add other values to the objects if needed
            // one example though
            const updatedPosts = posts.map(post => {
                return {
                    ...post,
                    author: 'Arthur',
                }
            })
            this.setState({ posts: updatedPosts })
            // console.log(response);
        });
    }

    render() {
        let posts = this.state.posts.map(post => {
            return <Post key={post.id} title={post.title} author={post.author} />
        });

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;