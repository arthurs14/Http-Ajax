import React, { Component } from 'react';
import axios from '../../../axios';
import { Link } from 'react-router-dom';

import Post from '../../../components/Post/Post';
import './Posts.css';

class Posts extends Component {
  state = {
    posts: [],
  };


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
      console.log(error);
      //this.setState({ error: true });
    });
  }

  postSelectedHandler = (id) => {
    this.setState({ selectedPostId: id });
  }

  render() {
    let posts = <p style={{ textAlign: 'center' }}>Something went wrong</p>
    posts = this.state.posts.map(post => {
      return (
        <Link key={post.id} to={`/${post.id}`}>
          <Post
            title={post.title}
            author={post.author}
            clicked={() => this.postSelectedHandler(post.id)} />
        </Link>
      );
    });

    return (
      <section className="Posts">
        {posts}
      </section>
    );
  }
}

export default Posts;