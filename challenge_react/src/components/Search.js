import React, { Component } from 'react';
import '../css/bootstrap.css'
import '../css/bootstrap.min.css'
import '../css/style.css';
// import logo from '../logo/logo-alterra-academy.png';


class Search extends Component {
    render() {
      return (        
      <div className="App">
        <form class="ml-auto">
            <div class="search">
                <input type="text" class="form-control" maxlength="64" placeholder="Search" style={{width: '200px'}}/><button type="submit" class="btn btn-search"><i class="fa fa-search"></i></button>
            </div>
        </form>
      </div>

      );
    }
  }
  

export default Search;