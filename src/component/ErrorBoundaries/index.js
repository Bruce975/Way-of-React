import React, { Component } from "react";
import { Alert } from "antd";

class ErrorBoundaries extends Component {
  constructor() {
    super();
    this.state = {
      error: false
    };
  }

  componentDidCatch(error) {
    console.log(error);
    this.setState({
      error: true
    });
  }

  render() {
    return this.state.error ? (
      <Alert
        message="哦豁，又蹦了"
        description="稍等，程序猿正在紧急抢修中！"
        type="error"
        showIcon
      />
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundaries;
