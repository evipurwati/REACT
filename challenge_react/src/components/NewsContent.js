import React, { Component } from 'react';
// import '..///Blog.css';
import '../css/bootstrap.min.css';
import putriayako from '../img/putriayako.jpeg'
import '../css/listBlog.css';

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
                    <div class="searchbutton">
                        <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" style={{width: '250px'}}/>
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit" style={{width: '75px'}}>Search</button>
                        </form>
                    </div>
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
                    {/* <div class="container">
                        <h2>Badges</h2>
                        <a href="#">News <span class="badge">5</span></a><br></br>
                        <a href="#">Comments <span class="badge">10</span></a><br></br>
                        <a href="#">Updates <span class="badge">2</span></a>
                    </div> */}
                </div>
                <div class="col-md-7">
                    <div class="imgblog">
                        <img src={putriayako}/>
                    </div>
                    <br></br>
                    <div class="titleblog">
                        <h6 style={{fontWeight: 'bold'}}>Nikahi Rakyat Biasa, Putri Ayako Dari Jepang Mendapatkan Penghargaan Panasonic Gobel Awards</h6>
                        <h6 style={{color: 'black'}}>Pernikahan Putri Ayako digelar dengan nuansa adat Jawa dan Jepang.</h6>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default NewsContent;