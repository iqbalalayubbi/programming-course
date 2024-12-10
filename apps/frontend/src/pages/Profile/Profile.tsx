import { sidebarAvatar } from '@/assets';
import { Tabs, Flex, Avatar } from 'antd';
import type { TabsProps } from 'antd';
import { AccountTab, PersonalTab } from './components';

const Profile = () => {
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Account',
      children: <AccountTab />,
    },
    {
      key: '2',
      label: 'Personal',
      children: <PersonalTab />,
    },
  ];

  return (
    <Flex align="center" justify="center" className="w-full h-full">
      <Flex
        align="center"
        justify="center"
        gap={100}
        className="w-3/4 py-10 rounded-md bg-light-bg"
      >
        <Flex vertical align="center">
          <Avatar size={200} icon={<img src={sidebarAvatar} />} />
          <p className="text-center my-3 w-60 italic text-gray-400">
            “Not matter who you are, you just not someone else”
          </p>
          <Flex gap={8} vertical>
            <p className="text-gray-third font-semibold">@steve_smith</p>
            <span className="bg-yellow-500 text-light-text px-3 py-1 rounded-full">
              STUDENT
            </span>
          </Flex>
        </Flex>
        <Tabs defaultActiveKey="1" items={items} className="w-1/3" />
      </Flex>
    </Flex>
  );
};

export { Profile };
