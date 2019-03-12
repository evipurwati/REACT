import React, { Component } from 'react';
// import '..///Blog.css';
import '../css/bootstrap.min.css';
import '../css/listBlog.css';
import Search from '../components/Search';
import ListNews from '../components/ListNews';
import Blog from '../components/Blog';

class NewsContent extends Component {
  render() {
    return (
      <div className="App">
            <meta charset="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"/>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
        <div class="container">
            <div class="row">
                <div class="col-md-5">
                    <Search />
                    <ListNews />
                </div>
                <div class="col-md-7">
                    <Blog />
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default NewsContent;