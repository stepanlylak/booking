import { Flex, Typography } from 'antd';

import './CurrentUserSelectWrapper.scss';

export default function CurrentUserSelectWrapper({ children }) {
  return (
    <div className="boo-current-user-select-wrapper">
      <Typography>
        <div className="boo-logo">Booking</div>
        <Typography.Title style={{ color: '#ffffff' }} mark>
          Please select the user
        </Typography.Title>
        <Flex gap="large" wrap justify="center" style={{ paddingTop: '2rem' }}>
          {children}
        </Flex>
      </Typography>
    </div>
  );
}
