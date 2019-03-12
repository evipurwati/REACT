import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import '../css/bootstrap.min.css';
import '../css/listBlog.css';
import Search from '../components/Search';
import ListNews from '../components/ListNews';
import Blog from '../components/Blog';
import Navbar from '../components/Navbar';
import az from '../img/putriayako.jpeg';
import putriayako from '../img/putriayako.jpeg';

const apiKey = "31e59cd2d87747ddbfb14d1c08412411";
const baseUrl = "https://newsapi.org/v2/"
const urlHeadline = "https://newsapi.org/v2/top-headlines?country=id&apiKey=31e59cd2d87747ddbfb14d1c08412411"; 
const urlNews = "https://newsapi.org/v2/everything?q=rampage&apiKey=31e59cd2d87747ddbfb14d1c08412411"; 

class NewsContent extends Component {
  constructor (props){
    super(props);
    this.state = {
      listNews: [],
      blog: [],
      searchText : ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.doSearch = this.doSearch.bind(this);
  }

  componentDidMount = () => {
    const self = this;
    axios 
      .get(urlHeadline)
      .then(function (response) {
        self.setState({ listNews: response.data.articles });
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);        
      });
    axios 
      .get(urlNews)
      .then(function (response) {
        self.setState({ blog: response.data.articles });
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);        
      });
  }

  // handleInputChange = e => {
  //   console.log('event', e.target.value);
  //   let value = e.target.value;

  //   this.setState(
  //   {
  //     search: value
  //   },
  //   () => {
  //     this.searchNews(value);
  //   }
  //   );
  // };

  // searchNews = async keyword => {
  //   console.log('searchNews', keyword);
  //   const self = this;
  //   if (keyword.length > 2) {
  //     try {
  //       const response = await axios.get(
  //         baseUrl + 'everything?q=' + keyword + apiKey
  //       );
  //       console.log(response);
  //       self.setState({ listNews: response.data } 
  //         .catch (error) {
  //         console.error(error);
  //     })
  //   }
  // };

//   handleChange(e){
//     this.doSearch(e.target.value);
//   }



//   doSearch(keyword){
//     let self = this;
//     let urlSearch = baseUrl + "everything?q="+ keyword + "&apiKey=" + apiKey;
//     if(keyword.length > 2){
//         axios.get(urlSearch).then(function(response){
//             self.setState({listNews : response.data.articles});
//         }).catch(function(error){
//             console.log(error);
//         });
//     }
    
// }
  
// //   render() {
// //     console.log("here")
// //     const {listNews} = this.state;
// //     const {blog} = this.state;
// //     const is_login = JSON.parse(localStorage.getItem("is_login"));
// //     return (
// //       <div className="App">
// //             <meta charset="utf-8"/>
// //             <meta name="viewport" content="width=device-width, initial-scale=1"/>
// //             <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"/>
// //             <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
// //             <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
// //         <div class="row">
// //             <div class="col-md-12">
// //                 <Navbar />
// //             </div>
// //         </div>
        
// //         <div class="container">
// //             <div class="row">
// //                 <div class="col-md-4">
// //                     <Search title="Cari" placeholder="type keyword.."/><br></br>
// //                     {listNews.slice(0,5).map((item, key) => {
// //                       const title = item.title !== null ? item.title : "";
// //                       return <ListNews key={key} title={title} index={key}/>;
// //                     })}
// //                 </div>
// //                 <div class="col-md-8">
// //                     {blog.slice(0,5).map((item, key) => {
// //                       const src_img = item.urlToImage === null ? az : item.urlToImage;
// //                       const content = item.content !== null ? item.content: "";
// //                       const title = item.title !== null ? item.title : "";
// //                       const index = key;
// //                       return <Blog key={key} title={title} img={src_img} content={content} index={key}/>;
// //                     })}
// //                 </div>
// //             </div>
// //         </div>
// //       </div>
// //     );
// //   }
// // }


render() {
  console.log("here")
  const {listNews} = this.state;
  const {blog} = this.state;
  const is_login = JSON.parse(localStorage.getItem("is_login"));
  if(is_login === null) {
    return <Redirect to = {{pathname : "/signin"}}/>
  }
  else {
    return (
      <div>
        <Blog handleChange={this.handleChange} listNews={listNews} blog={blog}/>
      </div>
    );
  }
  }
}

//   return (
//     <div className="App">
//           <meta charset="utf-8"/>
//           <meta name="viewport" content="width=device-width, initial-scale=1"/>
//           <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"/>
//           <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
//           <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
//       <div class="row">
//           <div class="col-md-12">
//               <Navbar />
//           </div>
//       </div>
      
//       <div class="container">
//           <div class="row">
//               <div class="col-md-4">
//                   <Search title="Cari" placeholder="type keyword.."/><br></br>
//                   {listNews.slice(0,5).map((item, key) => {
//                     const title = item.title !== null ? item.title : "";
//                     return <ListNews key={key} title={title} index={key}/>;
//                   })}
//               </div>
//               <div class="col-md-8">
//                   {blog.slice(0,5).map((item, key) => {
//                     const src_img = item.urlToImage === null ? az : item.urlToImage;
//                     const content = item.content !== null ? item.content: "";
//                     const title = item.title !== null ? item.title : "";
//                     const index = key;
//                     return <Blog key={key} title={title} img={src_img} content={content} index={key}/>;
//                   })}
//               </div>
//           </div>
//       </div>
//     </div>
//   );
// }
// }

export default NewsContent;