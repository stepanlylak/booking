import { EnvironmentOutlined, UserOutlined } from "@ant-design/icons";
import { useQuery } from '@tanstack/react-query';
import { Button, Card, Descriptions, Divider, Flex, List, Tag, theme, Typography } from 'antd';
import { useParams } from 'react-router-dom';

import HotelsApi from '../../api/HotelsApi.js';
import ImagePreview from '../../components/ImagePreview/ImagePreview.js';

import './Hotel.scss';

const { Title, Paragraph, Text } = Typography;

export default function Hotel() {
  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken();
  const { hotelId } = useParams();

  const { isLoading, error, data } = useQuery({
    queryKey: ['HotelsApi.getAll', hotelId],
    queryFn: () => HotelsApi.getById(hotelId)
  });

  if (isLoading) {
    return 'Loading...';
  }
  console.log(data);

  return (
    <div
      className="boo-hotel"
      style={{
        padding: 24,
        minHeight: 380,
        background: colorBgContainer,
        borderRadius: borderRadiusLG
      }}
    >
      <div className="boo-hotel-header">
        <div className="boo-hotel-header-left">
          <ImagePreview item={data} width="600px" height="400px" />
        </div>
        <div className="boo-hotel-header-right">
          <Typography>
            <Title>{data.name}</Title>
            <Paragraph type="secondary">
              <EnvironmentOutlined /> {data.address}, {data.city}, {data.postalCode}, {data.country}
            </Paragraph>
            <Paragraph>{data.description}</Paragraph>
          </Typography>
          <Descriptions
            title="Info"
            bordered
            items={[
              {
                key: 'email',
                label: 'email',
                children: data.email,
                span: 3
              },
              {
                key: 'phone',
                label: 'phone',
                children: data.phone,
                span: 3
              },
              {
                key: 'website',
                label: 'website',
                children: data.website,
                span: 3
              },
              {
                key: 'rooms',
                label: 'rooms',
                children: data.rooms?.length || 0,
                span: 3
              }
            ]}
          />
        </div>
      </div>
      <Divider>Rooms</Divider>
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={data.rooms}
        renderItem={(room) => (
          <List.Item>
            <Card hoverable cover={<ImagePreview item={room} width="100%" height="300px" />}>
              <Card.Meta title={`${room.name} ($${room.price})`} description={room.description} />
              <div style={{ paddingTop: '20px' }}>
                {room.amenities.map(function (amenit, index) {
                  return (
                    <Tag key={index} bordered={false} color={getRandomColor()}>
                      {amenit}
                    </Tag>
                  );
                })}
              </div>
              <Divider />
              <Flex gap="small" wrap justify="space-between" align="center">
                <div><UserOutlined /> {room.guests}</div>
                <Button color="primary" variant="dashed">
                  Reserve
                </Button>
              </Flex>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
}

function getRandomColor() {
  const colors = [
    'processing',
    'success',
    'error',
    'warning',
    'magenta',
    'red',
    'volcano',
    'orange',
    'gold',
    'lime',
    'green',
    'cyan',
    'blue',
    'geekblue',
    'purple'
  ];

  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}
