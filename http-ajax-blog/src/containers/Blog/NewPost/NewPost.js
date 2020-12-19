import React, { Component } from 'react';
import axios from 'axios'
// import post from '../Post/Post';
import './NewPost.css'
import { Redirect} from 'react-router-dom'

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Raton Nana',
        submitted : false
    }
    postDataHandler = ()=>{
        const data = {
            title: this.state.title,
            body: this.state.content,
            author: this.state.author
        }
        axios.post('/posts',data)
        .then(response=>{
            console.log(response);
             this.props.history.replace('/posts') // TODO redirect and replace changing the page after some operation is completed we don't history our old pages 
            // this.props.history.push('/posts') // TODO Push we get history our old pages 
            // this.setState({submitted:true}) // TODO redirect and replace changing the page after some operation is completed we don't history our old pages 
        })     
    }
    render() {
        let redirect = null
        if(this.state.submitted){
            redirect = <Redirect to="/posts"/> // TODO Redirect = Like you have post route and when you submit the data at time when successfully data store  then you redirect in the home page
        }
        return (
            <div className="NewPost">
                {redirect}
               <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Raton">Raton</option>
                    <option value="Nana">Nana</option>
                </select>
                <button onClick={this.postDataHandler}> Add Post</button>
            </div>
        );
    }
}

export default NewPost;