import React, { Component } from 'react';
import '../css/bootstrap.css'
import '../css/bootstrap.min.css'
import '../css/style.css';
// import logo from '../logo/logo-alterra-academy.png';
import putriayako from '../img/putriayako.jpeg';


class Blog extends Component {
    render() {
      return (        
      <div className="App">
        <div class="imgblog">
            <img src={putriayako}/>
        </div>
        <br></br>
        <div class="titleblog">
            <h6 style={{fontWeight: 'bold'}}>Nikahi Rakyat Biasa, Putri Ayako Dari Jepang Mendapatkan Penghargaan Panasonic Gobel Awards</h6>
            <h6 style={{color: 'black'}}>Pernikahan Putri Ayako digelar dengan nuansa adat Jawa dan Jepang.</h6>
        </div>
      </div>

      );
    }
  }
  

export default Blog;



