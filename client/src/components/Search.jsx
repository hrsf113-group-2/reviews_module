import React from 'react';
import styles from './Search.css'
class Search extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <form>
        <input className="input-bar" onChange={this.props.searchBarTextChange} type="search"></input>
        <input onClick={this.props.searchSubmit} type="submit" value="Search Reviews"></input>
      </form>
    )
  }
}

export default Search;