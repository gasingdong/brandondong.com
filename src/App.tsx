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
      <div className="nav">
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ lineHeight: '48px' }}
        >
          <Menu.Item key="1">Projects</Menu.Item>
          <Menu.Item key="2">Resume</Menu.Item>
        </Menu>
      </div>
    </Layout>
  );
};

export default App;
