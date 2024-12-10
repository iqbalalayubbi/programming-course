import { thumbnailCourse } from '@/assets';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button, Flex } from 'antd';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';

const MainContent = () => {
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Contents',
      children: 'Content of Tab Pane 1',
    },
    {
      key: '2',
      label: 'Task',
      children: 'Content of Tab Pane 2',
    },
    {
      key: '3',
      label: 'Discussion',
      children: 'Content of Tab Pane 3',
    },
  ];

  return (
    <Flex gap={8} vertical>
      <Flex align="center" gap={16}>
        <Button type="text" icon={<ArrowLeftOutlined />} />
        <h1 className="font-bold text-4xl my-5">Basic HTML</h1>
      </Flex>
      <img src={thumbnailCourse} alt="" className="w-full" />
      <Tabs defaultActiveKey="1" items={items} className="my-5" />
    </Flex>
  );
};

export { MainContent };
