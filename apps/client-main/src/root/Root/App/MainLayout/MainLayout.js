import { DownOutlined } from '@ant-design/icons';
import { useQuery } from '@tanstack/react-query';
import { Dropdown, Layout, Menu, Space } from 'antd';
import { useMemo, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

import UsersApi from '../../../../api/UsersApi.js';

import './MainLayout.scss';

const { Header, Content, Sider, Footer } = Layout;

const items1 = [
  {
    key: 'home',
    label: `Home`
  }
];

export default function MainLayout() {
  const { isLoading, error, data } = useQuery({
    queryKey: ['UsersApi.getAll'],
    queryFn: UsersApi.getAll
  });

  const [user, setUser] = useState(null);

  const userMenu = useMemo(
    function () {
      if (!data) return { items: [] };
      return {
        onClick({ key }) {
          setUser(data.find((item) => item._id === key));
        },
        items: data.map(function (item) {
          return { key: item._id, label: item.name };
        })
      };
    },
    [data]
  );

  console.log(isLoading, data);

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
          defaultSelectedKeys={['home']}
          items={items1}
          style={{
            flex: 1,
            minWidth: 0
          }}
        />
        <Dropdown menu={userMenu}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              {user?.name || 'user not selected'}
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
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
