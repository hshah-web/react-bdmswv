import ReactDOM from 'react-dom'
import React, { Component } from 'react';
import './style.css';
import Header from "./common-components/header";
import Footer from "./common-components/footer";
import Panel from "./common-components/panel";
// ReactDOM.render(routing, document.getElementById("root"));
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

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
