import React from 'react';
import styles from './Search.css';
class Search extends React.Component {
  render() {
    return (
      <form className="search" onSubmit={this.props.searchSubmit}>
      <div>
        <i class="fas fa-search"></i>
        <input
        className="input-bar"
        type="search"
        onChange={this.props.searchBarTextChange}
        placeholder="Search reviews"></input>
      </div>
      </form>
    );
  }
}

export default Search;
