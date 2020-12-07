import React, { Component } from 'react';
import Blog from './containers/Blog/Blog';
import {BrowserRouter} from 'react-router-dom'
// import Post from './components/Post/Post'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Blog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;