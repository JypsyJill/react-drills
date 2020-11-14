import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Image from "./Image";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image url={"https://jypsyjillrides.files.wordpress.com/2019/12/yodo-cover.jpg"} />
      </div>
    );
  }
}

export default App;