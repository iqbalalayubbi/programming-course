import {
  Layout,
  Menu,
  Avatar,
  Button,
  Flex,
  Link,
  DashboardOutlined,
  BookOutlined,
  FileTextOutlined,
  UserOutlined,
  TeamOutlined,
  SettingOutlined,
  LogoutOutlined,
  LeftOutlined,
  RightOutlined,
} from '@/components';
import { type MenuProps } from '@/types';
import { useState } from '@/hooks';

const { Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const items: MenuItem[] = [
    {
      label: <Link to="/">Dashboard</Link>,
      icon: <DashboardOutlined style={{ fontSize: 16 }} />,
      key: '1',
    },
    {
      label: <Link to="/courses">Courses</Link>,
      icon: <BookOutlined style={{ fontSize: 16 }} />,
      key: '2',
    },
    {
      label: <Link to="/forum">Forum</Link>,
      icon: <FileTextOutlined style={{ fontSize: 16 }} />,
      key: '3',
    },
    {
      label: <Link to="/notes">Notes</Link>,
      icon: <TeamOutlined style={{ fontSize: 16 }} />,
      key: '4',
    },
    {
      label: <Link to="/friends">Friends</Link>,
      icon: <SettingOutlined style={{ fontSize: 16 }} />,
      key: '5',
    },
    {
      label: <Link to="/challenges">Challenges</Link>,
      icon: <SettingOutlined style={{ fontSize: 16 }} />,
      key: '6',
    },
    {
      label: <Link to="/settings">Settings</Link>,
      icon: <SettingOutlined style={{ fontSize: 16 }} />,
      key: '7',
    },
    {
      label: <Link to="/logout">Logout</Link>,
      icon: <LogoutOutlined style={{ fontSize: 16 }} />,
      key: '8',
    },
  ];

  return (
    <Sider
      theme="light"
      width={200}
      collapsed={isCollapsed}
      onCollapse={toggleSidebar}
    >
      <div className="relative py-5 px-0 bg-light-bg">
        <Button
          type="primary"
          icon={isCollapsed ? <RightOutlined /> : <LeftOutlined />}
          onClick={toggleSidebar}
          style={{ marginBottom: '16px' }}
          className="absolute -right-5 z-20"
        />
        <Flex align="center" vertical gap={16}>
          <Avatar size={40} icon={<UserOutlined />} />
          <Flex
            align="center"
            gap={8}
            vertical
            className={`${isCollapsed ? 'hidden' : 'flex'}`}
          >
            <p className="text-xl">Steve Smith</p>
            <span className="bg-primary text-light-text rounded-md px-3">
              STUDENT
            </span>
          </Flex>
        </Flex>
      </div>
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={['1']}
        items={items}
      />
    </Sider>
  );
};

export { Sidebar };
