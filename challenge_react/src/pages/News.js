import React, { Component } from 'react';
import '../css/bootstrap.css';
import '../css/bootstrap.min.css';
import '../css/style.css';
import Navbar from '../components/Navbar';
// import Search from '../components/Search';
import NewsContent from '../components/NewsContent';

class News extends Component {
    render() {
      return (        
      <div className="App">
        <Navbar />
        <br></br>
        <NewsContent />
        </div>

      );
    }
  }
  

export default News;