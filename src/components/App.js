import React, { Component } from "react";
import AppleItem from "./AppleItem";

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="appleBasket">
          <div className="title"></div>
          <div className="stats">
            <div className="section">
              <div className="head"></div>
              <div className="content"></div>
            </div>
          </div>
          <div className="appleList">
            <AppleItem />
            <div className="empty-tip">苹果篮子空空如也</div>
          </div>
          <div className="btn-div">
            <button>摘苹果</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
