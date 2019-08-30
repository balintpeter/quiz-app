import React, { Component } from "react";
import Header from "./components/layout/Header";
import Quiz from "./components/quiz/Quiz";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div class="container">
        <div class="page">
          <Header />
          <Quiz />
        </div>
      </div>
    );
  }
}

export default App;
