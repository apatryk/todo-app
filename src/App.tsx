import 'antd/dist/antd.css';

import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import MainPage, { AddTaskForm } from './app/AddTaskForm';
import { TodayTasks } from './app/TodayTasks';

const { Header, Content, Footer, Sider } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
          <Menu theme="dark" mode="inline">
            <Menu.Item key="/">
              <Link to="/">Main page</Link>
            </Menu.Item>
            <Menu.Item key="/today">
              <Link to="/today">Today tasks</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            <MainPage />
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <Routes>
              <Route path="/" element={<AddTaskForm />} />
              <Route path="today" element={<TodayTasks />} />
            </Routes>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Patryk Antecki 2022 :)</Footer>
        </Layout>
      </Layout>
    </>
  );
}

export default App;
