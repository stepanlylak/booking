import { EnvironmentOutlined } from '@ant-design/icons';
import { useQuery } from '@tanstack/react-query';
import { Layout, List, theme } from 'antd';
import { Link } from 'react-router-dom';

import HotelsApi from '../../api/HotelsApi.js';
import ImagePreview from '../../components/ImagePreview/ImagePreview.js';
import Sidebar from './Sidebar/Sidebar.js';

import './Home.scss';

const { Content } = Layout;

export default function Home() {
  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken();
  const { isLoading, error, data } = useQuery({
    queryKey: ['HotelsApi.getAll'],
    queryFn: HotelsApi.getAll
  });
  if (isLoading) {
    return 'Loading...';
  }

  return (
    <Layout style={{ padding: '24px 0', background: colorBgContainer, borderRadius: borderRadiusLG }}>
      <Sidebar />
      <Content style={{ padding: '0 24px', minHeight: 280 }}>
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: (page) => {
              console.log(page);
            },
            pageSize: 3
          }}
          dataSource={data}
          renderItem={function (item) {
            return (
              <List.Item key={item._id} className="boo-list-item">
                <ImagePreview item={item} />
                <div className="boo-list-item-content">
                  <List.Item.Meta
                    title={<Link to={`/hotels/${item._id}`}>{item.name}</Link>}
                    description={
                      <>
                        <EnvironmentOutlined /> {item.address}, {item.city}, {item.postalCode}, {item.country}
                      </>
                    }
                  />
                  {item.description}
                </div>
              </List.Item>
            );
          }}
        />
      </Content>
    </Layout>
  );
}
