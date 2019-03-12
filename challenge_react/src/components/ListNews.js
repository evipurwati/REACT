import React, { Component } from 'react';
import '../css/bootstrap.css'
import '../css/bootstrap.min.css'
import '../css/style.css';
// import logo from '../logo/logo-alterra-academy.png';


class ListNews extends Component {
    render() {
      return (        
      <div className="App">
        <div class="single category">
        <h3 class="side-title">Berita Terkini</h3>
        <ul class="list-unstyled">
            <li><a href="" title="">Gabung Alpha Tech Academy Sekarang<span class="list-urutan">1</span></a></li>
            <li><a href="" title="">Ada apa antara Kobar dan Hasan?<span class="list-urutan">1</span></a></li>
            <li><a href="" title="">Mengenal Arafat sang master Python<span class="list-urutan">1</span></a></li>
            <li><a href="" title="">Belajar react-Js itu seru. Kamu setuju ?<span class="list-urutan">1</span></a></li>
            <li><a href="" title="">Sudahkah kamu sehat mental ?<span class="list-urutan">1</span></a></li>
        </ul>
        </div>
      </div>

      );
    }
  }
  

export default ListNews;



