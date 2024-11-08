import { Layout, Menu } from 'antd';
import { Link, Outlet } from 'react-router-dom';

import CurrentUserSelect from '../../CurrentUserProvider/CurrentUserSelect.js';

import './MainLayout.scss';

const { Header, Content, Footer } = Layout;

const menu = [
  {
    key: 'reservations',
    label: <Link to="/profile/reservations">My Reservations</Link>
  }
];

export default function MainLayout() {
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
        <Link to="/" className="header-logo">
          Booking
        </Link>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['reservations']}
          items={menu}
          style={{
            flex: 1,
            minWidth: 0
          }}
        />
        <CurrentUserSelect />
      </Header>
      <Content
        style={{
          padding: '0 48px',
          marginTop: '30px'
        }}
      >
        <Outlet />
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
