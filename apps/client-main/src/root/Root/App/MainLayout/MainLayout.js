import { Layout, Menu, theme } from 'antd';
import { Outlet } from 'react-router-dom';

import './MainLayout.scss';

const { Header, Content, Footer } = Layout;

const items1 = [
  {
    key: 'home',
    label: `Home`
  }
];

export default function MainLayout() {
  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken();
  return (
    <Layout className="main-layout">
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <div className="header-logo">Booking</div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['home']}
          items={items1}
          style={{
            flex: 1,
            minWidth: 0
          }}
        />
      </Header>
      <Content
        style={{
          padding: '0 48px',
          marginTop: '30px'
        }}
      >
        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: colorBgContainer,
            borderRadius: borderRadiusLG
          }}
        >
          <Outlet />
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center'
        }}
      >
        Booking ©{new Date().getFullYear()} Created by Stepan Lylak
      </Footer>
    </Layout>
  );
}
