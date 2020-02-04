import React, { Component, Fragment } from "react";
import ErrorBoundaries from "../../component/ErrorBoundaries";
import { Button } from "antd";

class Error extends Component {
  render() {
    return (
      <Fragment>
        <h5>正确的代码</h5>
        <ErrorBoundaries>
          <div>老铁666啊</div>
        </ErrorBoundaries>
        <h5>报错的代码</h5>
        <ErrorBoundaries>
          <ErrorChildren />
        </ErrorBoundaries>
      </Fragment>
    );
  }
}

class ErrorChildren extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    };
  }

  addCount = () => {
    console.log(this.state);
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    if (this.state.count > 1) {
      throw new Error("I crashed!");
    } else {
      return <Button onClick={this.addCount}>点我马上就蹦</Button>;
    }
  }
}

export default Error;
