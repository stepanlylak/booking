import { EnvironmentOutlined, UserOutlined } from '@ant-design/icons';
import { useQuery } from '@tanstack/react-query';
import { Button, Card, Divider, Flex, List, Tag, theme, Typography } from 'antd';
import { Link } from 'react-router-dom';

import UsersApi from '../../api/UsersApi.js';
import ImagePreview from '../../components/ImagePreview/ImagePreview.js';
import { useCurrentUser } from '../../root/Root/CurrentUserProvider/CurrentUserProvider.js';
import { queryClient } from '../../root/Root/Root.js';

export default function MyReservations() {
  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken();

  const { currentUser } = useCurrentUser();
  const userId = currentUser?._id;

  const { isLoading, error, data } = useQuery({
    queryKey: ['UsersApi.findAllReservations', userId],
    queryFn: () => UsersApi.findAllReservations(userId)
  });

  if (isLoading) {
    return 'Loading...';
  }

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
      <Typography>
        <Typography.Title>My Reservations</Typography.Title>
      </Typography>
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
          const { hotel } = item;
          const room = hotel.rooms.find((room) => room._id === item.room);
          return (
            <List.Item key={item._id} className="boo-list-item">
              <ImagePreview item={hotel} />
              <div className="boo-list-item-content">
                <List.Item.Meta
                  title={<Link to={`/hotels/${hotel._id}`}>{hotel.name}</Link>}
                  description={
                    <>
                      <EnvironmentOutlined /> {hotel.address}, {hotel.city}, {hotel.postalCode}, {hotel.country}
                    </>
                  }
                />
                {hotel.description}
                <Divider>Room</Divider>
                <Card
                  style={{ width: '300px' }}
                  hoverable
                  cover={<ImagePreview item={room} width="100%" height="300px" />}
                >
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
                    <div>
                      <UserOutlined /> {room.guests}
                    </div>
                    <Button
                      color="danger"
                      variant="dashed"
                      onClick={function () {
                        UsersApi.cancelReservation(userId, item._id).then(function () {
                          queryClient.setQueryData(['UsersApi.findAllReservations', userId], function (old) {
                            return old.filter((reservation) => reservation._id !== item._id);
                          });
                        });
                      }}
                    >
                      Cancel Reservation
                    </Button>
                  </Flex>
                </Card>
              </div>
            </List.Item>
          );
        }}
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
