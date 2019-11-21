import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb, Icon, Avatar } from 'antd';
import Photo from './assets/avatar.jpg';

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  return (
    <Layout>
      <div className="header">
        <Avatar className="header__avatar" src={Photo} size={100} />
        <div className="header__caption">
          <div className="header__name">Brandon Dong</div>
          <div className="header__title">Full Stack Developer</div>
          <div className="header__icons">
            <Icon type="github" />
            <Icon type="linkedin" />
            <Icon type="twitter" />
            <Icon type="mail" />
          </div>
        </div>
      </div>
      {/* <Header>
        <div className="nav">
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">Projects</Menu.Item>
            <Menu.Item key="2">Resume</Menu.Item>
          </Menu>
        </div>
      </Header>
      <Content style={{ background: '#fff' }}>
        <div className="content">Content</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        © 2019 Created by Brandon Dong
      </Footer> */}
    </Layout>
  );
};

export default App;
