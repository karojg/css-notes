import React from 'react';
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './components/About';

const { Header, Content, Footer } = Layout;

const App = () => {
  return (
    <Layout className="layout">
      <Router>
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Link to="/about">About</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/position">Position</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/display">Display</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content">
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/position">POSITION</Route>
              <Route path="/display">DISPLAY</Route>
            </Switch>
          </div>
        </Content>
      </Router>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  );
};

export default App;
