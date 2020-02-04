import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import Context from "./Page/Context";
import Error from "./Page/Error";
import Ref from "./Page/Ref";

const { Sider } = Layout;

class App extends Component {
  render() {
    return (
      <Layout className="app">
        <BrowserRouter>
          <Sider theme="light" className="app-sidebar">
            <h1 className="sidebar-title">React学习之路</h1>
            <Menu mode="inline">
              <Menu.Item key="1">
                <Link to="/context">Context</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/error">Error</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/ref">Ref</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <div className="page-content">
            <Route path="/context" exact component={Context} />
            <Route path="/error" exact component={Error} />
            <Route path="/ref" exact component={Ref} />
          </div>
        </BrowserRouter>
      </Layout>
    );
  }
}

export default App;
