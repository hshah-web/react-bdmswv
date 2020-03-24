import React, { Component } from 'react';
import './style.css';
import Header from "./common-components/header-component";
import Footer from "./common-components/footer-component";
import SideBar from "./common-components/sidebar-component";
import { Router, Switch } from 'react-router';

const App = (
  <Router>
    <div>
      <SideBar />
      <Header />
      <hr />
      <Switch>
        {/* <Route exact path="/" component={Header} />
        <Route path="/users" component={Footer} />
        <Route path="/contact" component={SideBar} />
        <Route component={Notfound} /> */}
      </Switch>
      <Footer />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: 'React'
//     };
//   }

//   render() {
//     return (
//       <div>
//         <Hello name={this.state.name} />
//         <p>
//           Start editing to see some magic happen :)
//         </p>
//       </div>
//     );
//   }
// }

// render(<App />, document.getElementById('root'));
