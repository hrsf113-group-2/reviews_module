import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <form>
        <input onChange={this.props.searchBarTextChange} type="search"></input>
        <input onClick={this.props.searchSubmit} type="submit"></input>
      </form>
    )
  }
}

export default Search;