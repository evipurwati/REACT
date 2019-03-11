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
// import logo from './logo.svg';
// import './App.css';


class Home extends Component {
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
            <div id="front-banner">
                <div class="banner-element"><img src={logoprofil} alt="" id="profile-img"/></div>
                <div class="banner-element"><h1><span class="wow2">Evi</span> vs <span class="wow">Mae</span> | Alphatech</h1></div>
                <div class="banner-element" id="location"><span><img src={iconlocation}/>   </span><span>   Malang, East Java, Indonesia.</span></div>
                <div class="banner-element">Front-end Developer</div>
                <div class="banner-element"><button type="button" class="btn btn-danger">Download CV</button></div>
            </div>
        </section>
        {/* <!-- End of Banner --> */}

        <section>
            <div class="content-wrapper">
                <div class="row">
                    <div class="col-md-6">
                        <h1>About Me</h1>
                        <p>Hi! I am Hian Oliviera, I work as a Front-end Developer at Alterra Group.</p>
                        <p>Front-end Developer are constructive work websites use HTML,CSS, and JavaScript.</p>
                        <p>Front-end Developer are the people who make it design and develop the design until become a website that can run.</p>
                    </div>
                    <div class="col-md-6">
                        <h1>Information</h1>
                        <table class="info">
                            <tr>
                                <td>Age</td>
                                <td class="middle-dotes">:</td>
                                <td class="end-dotes">22th</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td class="middle-dotes">:</td>
                                <td class="end-dotes">blablabla@blamail.com</td>
                            </tr>
                            <tr>
                                <td>Address</td>
                                <td class="middle-dotes">:</td>
                                <td class="end-dotes">Jl. Tidar Raya No.23 Malang, Jawa Timur, Indonesia</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </section>

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
  

export default Home;