import { thumbnailExample } from '@/assets';
import { ArrowLeftOutlined, CaretRightOutlined } from '@ant-design/icons';
import { Button, Collapse, CollapseProps, Flex, List } from 'antd';

const MainContent = () => {
  const data = [
    'Basic HTML',
    'Styling your page with CSS',
    'Javascript for programming',
    'Manipulate your component with JS',
  ];

  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: <h3 className="font-semibold text-xl">Description</h3>,
      children: (
        <p className="text-gray-third w-full">
          Alteration literature to or an sympathize mr imprudence. Of is ferrars
          subject as enjoyed or tedious cottage. Procuring as in resembled b
          Alteration literature to or an sympathize mr imprudence. Of is ferrars
          subject as enjoyed or tedious cottage. Procuring as in resembled b
        </p>
      ),
    },
    {
      key: '2',
      label: <h3 className="font-semibold text-xl">What you will get</h3>,
      children: (
        <List
          bordered={false}
          dataSource={data}
          renderItem={(item) => (
            <List.Item className="hover:text-secondary hover:cursor-pointer">
              {item}
            </List.Item>
          )}
        />
      ),
    },
  ];

  return (
    <Flex className="h-full w-full bg-light-bg mx-10 px-10 py-3" vertical>
      <Flex align="center" gap={16}>
        <Button type="text" icon={<ArrowLeftOutlined />} />
        <h1 className="text-4xl font-bold my-5">
          Build Website With MERN Stack
        </h1>
      </Flex>
      <img
        src={thumbnailExample}
        alt="detail course thumbnail image"
        className="w-full rounded-lg mb-5 h-96"
      />
      <Flex vertical>
        <h3 className="font-semibold text-xl my-3">Tech</h3>
        <Flex gap={16}>
          <span className="bg-gray-500 text-white px-3 py-1 rounded-full">
            Tailwind
          </span>
          <span className="bg-gray-500 text-white px-3 py-1 rounded-full">
            Expresss
          </span>
          <span className="bg-gray-500 text-white px-3 py-1 rounded-full">
            React
          </span>
          <span className="bg-gray-500 text-white px-3 py-1 rounded-full">
            Node JS
          </span>
        </Flex>
        <h3 className="font-semibold text-xl my-3">Prerequisite</h3>
        <Flex gap={16}>
          <span className="bg-yellow-500 text-white px-3 py-1 rounded-full">
            Javascript Fundamental
          </span>
          <span className="bg-yellow-500 text-white px-3 py-1 rounded-full">
            Basic Algorithm
          </span>
          <span className="bg-yellow-500 text-white px-3 py-1 rounded-full">
            HTML
          </span>
          <span className="bg-yellow-500 text-white px-3 py-1 rounded-full">
            CSS
          </span>
        </Flex>
        <Collapse
          bordered={false}
          defaultActiveKey={['1']}
          expandIcon={({ isActive }) => (
            <CaretRightOutlined rotate={isActive ? 90 : 180} />
          )}
          expandIconPosition="right"
          className="w-full my-8 bg-light-bg"
          items={items}
        />
      </Flex>
    </Flex>
  );
};

export { MainContent };
