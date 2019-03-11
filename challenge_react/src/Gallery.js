import React, { Component } from 'react';
import './css/bootstrap.css'
import './css/bootstrap.min.css'
import './css/style.css';
import logo from './logo/logo-alterra-academy.png';
import logoprofil from './img/profile.png';
import iconlocation from './ico/ico-location.png';
import logoalta from './logo/logo-alterra-academy-plain.png';
import iconfb from './ico/ico-facebook.png';
import icontwitter from './ico/ico-twitter.png';
import iconig from './ico/ico-instagram.png';
import icongallery from './ico/ico-gallery.png';
import img1 from './img/exp-gallery/jake-allison-1322894-unsplash.jpg';
import img2 from './img/exp-gallery/jay-lee-1323073-unsplash.jpg';
import img3 from './img/exp-gallery/nic-yee-1321843-unsplash.jpg';
import img4 from './img/exp-gallery/nordwood-themes-1319985-unsplash.jpg';
import img5 from './img/exp-gallery/phil-desforges-1322844-unsplash.jpg';
import img6 from './img/exp-gallery/ryan-1321510-unsplash.jpg';

// import logo from './logo.svg';
// import './App.css';


class Gallery extends Component {
    render() {
      return (        
      <div className="App">
          <header class="header1">
            <div class="row" style={{backgroundColor: '#f8f9fa'}}>
                <div class="col-md-3 col-sm-6">
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <img src={logo}/>
                    </nav>
                </div>
                <div class="col-md-9 col-sm-6">
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <ul class="navbar-nav row" style={{width: '100%', justifyContent: 'flex-end'}}>
                            <li class="nav-item active col-lg-2">
                            <a class="nav-link" href="#" style={{color: '#F47522'}}>ABOUT <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item col-lg-2">
                            <a class="nav-link" href="#" style={{color: '#19345E'}}>GALERY</a>
                            </li>
                            <li class="nav-item col-lg-2">
                            <a class="nav-link" href="#" style={{color: '#19345E'}}>CONTACT</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>

        {/* <!-- Start of Banner --> */}
        <section>
            <div class="horrizontal-line">
                <span style={{marginLeft: '50px'}}><img src={icongallery}/></span><span style={{marginLeft: '30px'}}>GALERY</span>
                {/* </br></hr> */}
            </div>
            <div class="wrapper-galery row">
                <div class="col-lg-4 col-md-6 col-sm-12"><img src={img1} alt="" class="galery-photo"/></div>
                <div class="col-lg-4 col-md-6 col-sm-12"><img src={img2} alt="" class="galery-photo"/></div>
                <div class="col-lg-4 col-md-6 col-sm-12"><img src={img3} alt="" class="galery-photo"/></div>
                <div class="col-lg-4 col-md-6 col-sm-12"><img src={img4} alt="" class="galery-photo"/></div>
                <div class="col-lg-4 col-md-6 col-sm-12"><img src={img5} alt="" class="galery-photo"/></div>
                <div class="col-lg-4 col-md-6 col-sm-12"><img src={img6} alt="" class="galery-photo"/></div>
            </div>
        </section>
        {/* <!-- End of Banner --> */}
        
        {/* <!-- Start of Footer --> */}
        <footer>
            <div class="row">
                <div class="col-md-3 col-sm">
                    <div>
                        <img src={logoalta} class="logo-footer"/>
                    </div>
                    <div>
                        <p class="copyright"> © Copyright Alterra Group 2019</p>
                    </div>
                </div>
                <div class="col-md-2 col-sm">
                    <div class="socmed">Follow Us on:</div>
                    <div>
                        <table>
                            <tr>
                                <td><img src={iconfb}/></td>
                                <td>Facebook</td>
                            </tr>
                            <tr>
                                <td><img src={icontwitter}/></td>
                                <td>Twitter</td>
                            </tr>
                            <tr>
                                <td><img src={iconig}/></td>
                                <td>Instagram</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </footer>
        {/* <!-- End of Footer --> */}
        
        </div>

      );
    }
  }
  

export default Gallery;