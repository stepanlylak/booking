import { SearchOutlined } from '@ant-design/icons';
import { Button, Divider, Flex, Input, Layout, theme } from 'antd';

import './Sidebar.scss';

const { Sider } = Layout;

export default function Sidebar() {
  const {
    token: { colorBgContainer }
  } = theme.useToken();

  return (
    <Sider className="boo-sidebar" style={{ background: colorBgContainer }} width={300}>
      <Flex gap="small" wrap justify="flex-end">
        <Button type="primary">Apply</Button>
      </Flex>
      <Divider>Filters</Divider>
      <Input size="large" placeholder="Search" prefix={<SearchOutlined />} />
    </Sider>
  );
}
