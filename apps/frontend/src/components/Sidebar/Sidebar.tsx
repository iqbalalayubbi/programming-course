import {
  Layout,
  Menu,
  Avatar,
  Button,
  Flex,
  Link,
  LeftOutlined,
  RightOutlined,
  Iconify,
  Modal,
} from '@/components';
import { type MenuProps } from '@/types';
import { useState } from '@/hooks';
import { sidebarAvatar } from '@/assets';
import { useUser } from '@/stores';
import { appRoute, colorPalette } from '@/enums';
import { useNavigate } from 'react-router';
import { userDataStorage } from '@/services';

const { Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { user } = useUser();
  const navigate = useNavigate();

  const iconSize = 20;

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleLogout = () => {
    Modal.info({
      title: 'Logout',
      content: 'Are you sure you want to logout?',
      okText: 'Logout',
      okCancel: true,
      okButtonProps: { style: { backgroundColor: colorPalette.PRIMARY } },
      onOk: () => {
        userDataStorage.removeAccessToken();
        navigate(appRoute.LOGIN);
      },
      centered: true,
    });
  };

  const mainItems: MenuItem[] = [
    {
      label: <Link to="/"> Dashboard</Link>,
      icon: (
        <Iconify
          icon="cuida:dashboard-outline"
          style={{ fontSize: iconSize }}
        />
      ),
      key: '1',
    },
    {
      label: <Link to="/courses">Courses</Link>,
      icon: <Iconify icon="tdesign:course" style={{ fontSize: iconSize }} />,
      key: '2',
    },
    {
      label: <Link to="/forum">Forum</Link>,
      icon: <Iconify icon="stash:article" style={{ fontSize: iconSize }} />,
      key: '3',
    },
    {
      label: <Link to="/notes">Notes</Link>,
      icon: <Iconify icon="hugeicons:note" style={{ fontSize: iconSize }} />,
      key: '4',
    },
    {
      label: <Link to="/friends">Friends</Link>,
      icon: <Iconify icon="f7:person-2" style={{ fontSize: iconSize }} />,
      key: '5',
    },
    {
      label: <Link to="/challenges">Challenges</Link>,
      icon: (
        <Iconify icon="solar:ranking-broken" style={{ fontSize: iconSize }} />
      ),
      key: '6',
    },
  ];

  const settingItems: MenuItem[] = [
    {
      label: <Link to="/settings">Settings</Link>,
      icon: <Iconify icon="uil:setting" style={{ fontSize: iconSize }} />,
      key: '1',
    },
    {
      title: 'Logout',
      label: (
        <span onClick={handleLogout} className="text-red-500 block">
          Logout
        </span>
      ),
      icon: (
        <Iconify
          icon="humbleicons:logout"
          style={{ fontSize: iconSize }}
          color="red"
          className="rotate-180"
          onClick={handleLogout}
        />
      ),
      key: '2',
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
          <Link to={appRoute.PROFILE}>
            <Avatar
              size={isCollapsed ? 40 : 80}
              icon={<img src={sidebarAvatar} />}
              className="hover:cursor-pointer hover:shadow-md transition-all duration-300 hover:opacity-50 hover"
            />
          </Link>
          <Flex
            align="center"
            gap={8}
            vertical
            className={`${isCollapsed ? 'hidden' : 'flex'}`}
          >
            <h1 className="text-sm font-semibold italic text-gray-third">
              @{user.username}
            </h1>
            <p className="bg-secondary text-light-text text-sm rounded-full px-3 uppercase">
              {user.role}
            </p>
          </Flex>
        </Flex>
      </div>
      <Flex gap={20} vertical>
        <Flex gap={8} vertical>
          {!isCollapsed && (
            <h1 className="text-sm font-semibold text-gray-third px-8">Main</h1>
          )}

          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={mainItems}
          />
        </Flex>
        <Flex gap={8} vertical>
          {!isCollapsed && (
            <h1 className="text-sm font-semibold text-gray-third px-8">
              Settings
            </h1>
          )}

          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={[]}
            items={settingItems}
          />
        </Flex>
      </Flex>
    </Sider>
  );
};

export { Sidebar };
