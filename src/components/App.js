import { inject, observer } from "mobx-react";
import React, { Component } from "react";
import AppleItem from "./AppleItem";

@inject("AppleBasket")
@observer
class App extends Component {
  getAppleFn = () => {
    const { getApple } = this.props.AppleBasket;
    getApple();
  };
  render() {
    const {
      isgetting,
      eatApple,
      not_eat_apples,
      not_eat_number,
      not_eat_weight,
      has_eat_number,
      has_eat_weight,
    } = this.props.AppleBasket;
    return (
      <div className="app">
        <div className="appleBasket">
          <div className="title">苹果篮子</div>
          <div className="stats">
            <div className="section">
              <div className="head">当前</div>
              <div className="content">{`${not_eat_number}个苹果，${not_eat_weight}克`}</div>
            </div>
            <div className="section">
              <div className="head">已吃掉</div>
              <div className="content">{`${has_eat_number}个苹果，${has_eat_weight}克`}</div>
            </div>
          </div>
          <div className="appleList">
            {not_eat_number ? (
              not_eat_apples.map((item) => (
                <AppleItem
                  key={item.name}
                  name={item.name}
                  weight={item.weight}
                  click={eatApple}
                />
              ))
            ) : (
              <div className="empty-tip">苹果篮子空空如也</div>
            )}
          </div>
          <div className="btn-div">
            <button onClick={this.getAppleFn}>
              {isgetting ? "正在摘苹果" : "摘苹果"}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
