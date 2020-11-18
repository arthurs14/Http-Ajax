import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false,
    }

    componentDidMount() {
        // usually takes url as an argument
        axios.get('/posts').then(response => {
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
        }).catch(error => {
            //console.log(error);
            this.setState({ error: true });
        });
    }

    postSelectedHandler = (id) => {
        this.setState({ selectedPostId: id });
    }

    render() {
        const { selectedPostId, error } = this.state;
        let posts = <p style={{ textAlign: 'center' }}>Something went wrong</p>
        if (!error) {
            posts = this.state.posts.map(post => {
                return <Post
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    clicked={() => this.postSelectedHandler(post.id)} />;
            });
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;