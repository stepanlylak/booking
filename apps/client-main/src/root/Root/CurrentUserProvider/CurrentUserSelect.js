import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { useMemo } from 'react';

import { useCurrentUser } from './CurrentUserProvider.js';

export default function CurrentUserSelect() {
  const { users, currentUser, setCurrentUser } = useCurrentUser();

  const userMenu = useMemo(
    function () {
      if (!users) return { items: [] };
      return {
        onClick({ key }) {
          setCurrentUser(users.find((item) => item._id === key));
        },
        items: users.map(function (item) {
          return { key: item._id, label: item.name };
        })
      };
    },
    [setCurrentUser, users]
  );

  return (
    <Dropdown menu={userMenu}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          {currentUser?.name || 'User Not Selected'}
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
}
