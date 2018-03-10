import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Layout, Menu, Icon } from 'antd';
import { InventorList } from './component/InventorList';
import { InventorDetail } from './component/InventorDetail';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;

class App extends Component {
  state = {
    type: sessionStorage.getItem('type') || 'REST',
  };

  handleTypeClick = ({ key }) => {
    sessionStorage.setItem('type', key);
    this.setState({ type: key });
  };

  render() {
    return (
      <Router>
        <Layout>
          <Header
            style={{ position: 'fixed', width: '100%', zIndex: 1000 }}
            className="header"
          >
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={[this.state.type]}
              style={{ lineHeight: '64px' }}
              onClick={this.handleTypeClick}
            >
              <Menu.Item key="REST">REST</Menu.Item>
              <Menu.Item key="REST_CUSTOM">REST customized</Menu.Item>
              <Menu.Item key="GRAPHQL">GraphQL</Menu.Item>
            </Menu>
          </Header>
          <Layout style={{ marginTop: '65px' }}>
            <Sider
              width={200}
              style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0,
                background: '#fff',
              }}
            >
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
              >
                <SubMenu
                  key="sub1"
                  title={
                    <span>
                      <Icon type="user" />Inventors
                    </span>
                  }
                >
                  <Menu.Item key="1">
                    <Link to="/">List of inventors</Link>
                  </Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Layout style={{ padding: '0 24px 24px', marginLeft: 200 }}>
              <Content
                style={{
                  background: '#fff',
                  padding: 24,
                  margin: '16px 0',
                  minHeight: 280,
                }}
              >
                <Route
                  exact
                  path="/"
                  render={() => <InventorList type={this.state.type} />}
                />
                <Route
                  path="/inventor/:id"
                  render={props => (
                    <InventorDetail type={this.state.type} {...props} />
                  )}
                />
              </Content>
            </Layout>
          </Layout>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2016 Created by Ant UED
          </Footer>
        </Layout>
      </Router>
    );
  }
}

export default App;
