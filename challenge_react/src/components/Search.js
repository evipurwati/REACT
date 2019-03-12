import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// // import Search from 'react-search'
// import REACTDOM from 'react-dom'
// import '../css/bootstrap.css'
// import '../css/bootstrap.min.css'
// import '../css/style.css';
// // import logo from '../logo/logo-alterra-academy.png';


// class Search extends Component {
//     render() {
//       return (     
//         <section className="topsection">
//           <h4>{this.props.title}</h4>  
//             <input
//               type='text'
//               name='search'
//               id='search'
//               value={this.props.keyword}
//               placeholder={this.props.placeholder}
//               onChange={this.props.doSearch}
//             />
//         </section>
//       );
//     }
//   }

// Search.propTypes = {
//   title : PropTypes.string.isRequired,
//   placeholder : PropTypes.string.isRequired
// };


      {/* <div className="App">
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div> */}

// class Search extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       filtered: []
//     }
//   }
// }

// import React, { Component } from 'react';


class Search extends Component {
  render() {
    return (
      <div>
          <div>
            <input onChange={this.props.handleChange} type="text" placeholder="Cari disini" />
            <button className="btn btn-sm btn-success px-3">Search</button>
        </div>
      </div>
    );
  }
}

export default Search;

// export default Search;