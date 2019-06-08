import React from 'react';
import PropTypes from 'prop-types';

//---------Cannot have state---------
// const App = () => <h1>Hello Stateless</h1>

//---------Can have state---------
class App extends React.Component {
  render() {
    let txt = this.props.txt;
    return <h1>{txt}</h1>
  }
}

App.propTypes = {
  txt: PropTypes.string,
  cat: PropTypes.number.isRequired
}

App.defaultProps = {
  txt: 'this is the default text',
}

export default App;
