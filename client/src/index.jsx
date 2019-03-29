import React from 'react';
import ReactDOM from 'react-dom';

// create a main component
// but first start by making a shitty component that renders

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>React Component App now rendering!</div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))

export default App;