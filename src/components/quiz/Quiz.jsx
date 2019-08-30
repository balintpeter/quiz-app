import React, { Component } from "react";

import { Stats } from "fs";

class Quiz extends Component {
  state = { answers: [] };

  _parseJSON = response => {
    return response.text().then(function(text) {
      return text ? JSON.parse(text) : {};
    });
  };

  fetchData = () => {
    var requestInit = {
      method: "GET",
      header: { "Content-Type": "application/json" }
    };

    fetch("http://18.220.73.238:8080/api/getQuestion", requestInit)
      .then(response => response.json())
      .then(data => {
        this.setState({
          question: data.response.question,
          answers: data.response.answers
        });
      });
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <div>
        <h3>{this.state.question}</h3>
        <ul>
          {this.state.answers.map(item => (
            <li
              key={item.id}
              style={
                item.istrue ? { fontWeight: "bold" } : { fontWeight: "normal" }
              }
            >
              {item.answer}
            </li>
          ))}
        </ul>
        <button onClick={this.fetchData.bind(this)}>Uj kerdes</button>
      </div>
    );
  }
}

export default Quiz;
