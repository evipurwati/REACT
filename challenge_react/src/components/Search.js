import React, { Component } from 'react';
import '../css/bootstrap.css'
import '../css/bootstrap.min.css'
import '../css/style.css';
// import logo from '../logo/logo-alterra-academy.png';


class Search extends Component {
    render() {
      return (        
      <div className="App">
        <div class="searchbutton">
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" style={{width: '250px'}}/>
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit" style={{width: '75px'}}>Search</button>
            </form>
        </div>
      </div>

      );
    }
  }
  

export default Search;