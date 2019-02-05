import React from "react";
import { connect } from "react-redux";
import Header from "./header.js";
import Footer from "./footer.js";
import "./app.scss";

// why was it Main and not Counter?
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  // handleButtonClick = e => {
  //   e.preventDefault();
  //   this.setState({ stuff: Math.floor(Math.random() * 20 + 1) });
  // };

  goUp = e => {
    e.preventDefault();
    this.setState({ counter: this.state.counter + 1 });
  };

  goDown = e => {
    e.preventDefault();
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div id="counter-style">
        <a href="" onClick={this.goUp}>
          {" "}
          +{" "}
        </a>
        <span id="number">{this.state.counter}</span>
        <a href="" onClick={this.goDown}>
          {" "}
          -{" "}
        </a>
      </div>

      // Can uncomment this if we want the Click-Me button back
      // If so, comment out line 33-34
      // <h4>{this.state.stuff}</h4>
      // <button onClick={this.handleButtonClick}>Click Me</button>
      // </div>
    );
  }
}

// Switching Main -> Counter again
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Counter />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
