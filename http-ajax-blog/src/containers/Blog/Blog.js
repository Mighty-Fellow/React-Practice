import React, { Component } from 'react';
import { Route } from 'react-router-dom'
// import axios from 'axios'
// import axios from '../../axios'

// import Post from '../../components/Post/Post';
import NewPost from './NewPost/NewPost';
import Posts from './Posts/Posts';

import './Blog.css';
class Blog extends Component {
    render() {
       
        return (
            
            <div className="Blog">
                <header >
                    <nav>
                        <ul>
                            <li><a href="/"> Home</a></li>
                            <li><a href="/new-posst"> New Post</a></li>
                        </ul>
                    </nav>
                </header>
               {/*<Route path="/" exact render={() => <h1>Home</h1>}/>
               <Route path="/"  render={() => <h1>Home 2</h1>}/>*/}
               <Route path="/" exact component={Posts}/>
               <Route path="/new-posst" component={NewPost}/>
            </div>
        );
    }
}
export default Blog;