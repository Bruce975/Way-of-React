import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { Button, Input } from "antd";

class ChildrenRef extends Component {
  constructor() {
    super();
    this.state = {
      text: "Yes"
    };
  }
  text = "six";
  myAlert = () => {
    alert(1);
  };
  render() {
    return <Input placeholder="向子组件添加 ref" />;
  }
}

class Ref extends Component {
  constructor() {
    super();
    this.input = React.createRef();
    this.childrenRef = React.createRef();
    this.callbackInput = null;
    this.setCallbackInput = element => {
      this.callbackInput = element;
    };
  }

  focus = () => {
    this.input.current.focus();
    const input = ReactDOM.findDOMNode(this.input.current);
    console.log(ReactDOM.findDOMNode(this.input.current).style);
    setTimeout(() => {
      input.style.display = "none";
    }, 1000);
  };
  callbackFocus = () => {
    this.callbackInput && this.callbackInput.focus();
  };
  childrenAlert = () => {
    console.log(
      this.childrenRef.current.state.text,
      this.childrenRef.current.text,
      ReactDOM.findDOMNode(this.childrenRef.current)
    );
    this.childrenRef.current.myAlert();
  };
  render() {
    return (
      <Fragment>
        <Button onClick={this.focus}>点我马上聚焦</Button>
        <Input ref={this.input} placeholder="createRef" />
        <Button onClick={this.callbackFocus}>回调Refs</Button>
        <Input ref={this.setCallbackInput} placeholder="回调Refs" />
        <Button onClick={this.childrenAlert}>向子组件添加 ref</Button>
        <ChildrenRef ref={this.childrenRef} />
      </Fragment>
    );
  }
}

export default Ref;
