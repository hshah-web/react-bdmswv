import ReactDOM from 'react-dom'
import React, { Component } from 'react';
import './style.css';
import Header from "./common-components/header";
import Footer from "./common-components/footer";
import Panel from "./common-components/panel";

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <Panel />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
