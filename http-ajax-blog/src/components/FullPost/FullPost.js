import React, { Component } from 'react';
import './FullPost.css'
class FullPost extends Component {
    render() {
        let post = <p>Please select a post</p>;
        post = (
            <div className="FullPost">
                <h1>Title</h1>
                <h1>Content</h1>
                <div className="Edit">
                    <button className="Delete">Delete</button>
                </div>
            </div>
        )
        return post 
    }
}
export default FullPost;