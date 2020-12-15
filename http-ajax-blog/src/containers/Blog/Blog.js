import React, { Component } from 'react';
import { Route , NavLink} from 'react-router-dom'
// import axios from 'axios'
// import axios from '../../axios'

// import Post from '../../components/Post/Post';
import NewPost from './NewPost/NewPost';
import Posts from './Posts/Posts';
import FullPost from './FullPost/FullPost';

import './Blog.css';
class Blog extends Component {
    render() {
       
        return (
            
            <div className="Blog">
                <header >
                    <nav>
                        <ul>
                            {/* <li><a href="/"> Home</a></li> */} {/* reload page again because they doesn't contain his state */}
                            <li><NavLink 
                            to="/" 
                            exact 
                            activeClassName="my-active"
                            activeStyle={{
                                color: '#fa923f',
                                textDecoration: 'underline'
                            }}
                            > Home</NavLink></li> {/* don't need to reload page */} 
                            {/* <li><a href="/new-posst"> New Post</a></li> */}
                            <li><NavLink to={{
                                pathname:'/new-post',
                                hash:'#submit',
                                search:'?quick-submit=true'
                            }}> New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
               {/*<Route path="/" exact render={() => <h1>Home</h1>}/>
               <Route path="/"  render={() => <h1>Home 2</h1>}/>*/}
               <Route path="/" exact component={Posts}/>
               <Route path="/:id" exact component={FullPost}/>
               <Route path="/new-post" component={NewPost}/>
            </div>
        );
    }
}
export default Blog;