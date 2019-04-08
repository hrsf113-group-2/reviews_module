import React from 'react';
import styles from './Search.css'
class Search extends React.Component {
  render() {
    return (
      <form className="search" onSubmit={this.props.searchSubmit}>
        <input
        className="input-bar"
        type="search"
        onChange={this.props.searchBarTextChange}
        placeholder="Search reviews"></input>
      </form>
    );
  }
}

export default Search;
