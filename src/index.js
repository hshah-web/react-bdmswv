import ReactDOM from 'react-dom'
import React, { Component } from 'react';
import './style.css';
import Heading from "./common-components/heading";
import Footer from "./common-components/footer";
import Panel from "./common-components/panel";

class App extends Component {

  render() {
    return (
      <div>
        <Heading />
        <Panel />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
