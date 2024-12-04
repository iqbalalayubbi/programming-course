import { Layout, Menu, Avatar, Button, Flex } from 'antd';
import {
  DashboardOutlined,
  BookOutlined,
  FileTextOutlined,
  UserOutlined,
  TeamOutlined,
  SettingOutlined,
  LogoutOutlined,
  LeftOutlined,
  RightOutlined,
} from '@ant-design/icons';
import { useState } from 'react';
import { Link } from 'react-router';

const { Sider } = Layout;

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const renderMenu = () => {
    const allMenus = [
      {
        label: 'Dashboard',
        icon: <DashboardOutlined style={{ fontSize: 16 }} />,
        key: '1',
        path: '/',
      },
      {
        label: 'Courses',
        icon: <BookOutlined style={{ fontSize: 16 }} />,
        key: '2',
        path: '/courses',
      },
      {
        label: 'Forum Discuss',
        icon: <FileTextOutlined style={{ fontSize: 16 }} />,
        key: '3',
        path: '/forum',
      },
      {
        label: 'Notes',
        icon: <TeamOutlined style={{ fontSize: 16 }} />,
        key: '4',
        path: '/notes',
      },
      {
        label: 'Friends',
        icon: <SettingOutlined style={{ fontSize: 16 }} />,
        key: '5',
        path: '/friends',
      },
      {
        label: 'Challenges',
        icon: <SettingOutlined style={{ fontSize: 16 }} />,
        key: '6',
        path: '/challenges',
      },
      {
        label: 'Settings',
        icon: <SettingOutlined style={{ fontSize: 16 }} />,
        key: '7',
        path: '/settings',
      },
      {
        label: 'Logout',
        icon: <LogoutOutlined style={{ fontSize: 16 }} />,
        key: '8',
        path: '/login',
      },
    ];

    return allMenus.map((menu) => (
      <Menu.Item key={menu.key} icon={menu.icon}>
        <Link to={menu.path}>{menu.label}</Link>
      </Menu.Item>
    ));
  };

  return (
    <Sider
      theme="light"
      width={200}
      collapsed={isCollapsed}
      onCollapse={toggleSidebar}
    >
      <div
        style={{ padding: '20px 0', backgroundColor: '#fff' }}
        className="relative"
      >
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
        // className="mt-10"
      >
        {renderMenu()}
      </Menu>
    </Sider>
  );
};

export { Sidebar };
