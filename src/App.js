import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './components/About';
import Positioning from './components/Positioning';
import Display from './components/Display';
import './App.css';
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import { SmileOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

const App = () => {
  return (
    <Layout className="layout">
      <Router>
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal">
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
              <Route exact path="/">
                <About />
              </Route>{' '}
              <Route path="/about">
                <About />
              </Route>
              <Route path="/position">
                <Positioning />
              </Route>
              <Route path="/display">
                <Display />
              </Route>
            </Switch>
          </div>
        </Content>
      </Router>
      <Footer style={{ textAlign: 'center' }}>
        Made with some red wine <SmileOutlined />
      </Footer>
    </Layout>
  );
};

export default App;
