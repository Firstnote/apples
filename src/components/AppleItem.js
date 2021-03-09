import React, { Component } from "react";
import apple from "../images/apple.png";
class AppleItem extends Component {
  render() {
    const { name, weight, click } = this.props;
    return (
      <div className="appleItem">
        <div className="apple">
          <img src={apple} alt="apple" />
        </div>
        <div className="info">
          <div className="name">{`红苹果-${name}号`}</div>
          <div className="weight">{`${weight}克`}</div>
        </div>
        <div className="btn-div">
          <button
            onClick={() => {
              click(name);
            }}
          >
            吃掉
          </button>
        </div>
      </div>
    );
  }
}
export default AppleItem;
