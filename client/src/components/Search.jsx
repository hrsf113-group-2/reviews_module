import React from 'react';
import styles from './Search.css'
class Search extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <form className="search">
        <input className="input-bar" onChange={this.props.searchBarTextChange} type="search" placeholder="Search reviews"></input>
        <input className="input-button" onClick={this.props.searchSubmit} type="submit" value="Search Reviews"></input>
      </form>
    )
  }
}

export default Search;