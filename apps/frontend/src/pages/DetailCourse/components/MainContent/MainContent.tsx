import { Link, SkillLabel } from '@/components';
import { appRoute } from '@/enums';
import { useCourse } from '@/stores';
import { ArrowLeftOutlined, CaretRightOutlined } from '@ant-design/icons';
import { Button, Collapse, CollapseProps, Flex, List } from 'antd';

const MainContent = () => {
  const { course } = useCourse();

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
      children: <p className="text-gray-third w-full">{course.description}</p>,
    },
    {
      key: '2',
      label: <h3 className="font-semibold text-xl">What you will get</h3>,
      children: (
        <List
          bordered={false}
          dataSource={data}
          renderItem={(item) => (
            <List.Item className="hover:px-3 hover:text-light-text hover:bg-primary hover:cursor-pointer">
              {item}
            </List.Item>
          )}
        />
      ),
    },
  ];

  return (
    <Flex
      className="h-full w-full bg-light-bg mx-0 sm:mx-10 px-10 py-3"
      vertical
    >
      <Flex align="center" gap={16}>
        <Link to={appRoute.COURSES}>
          <Button type="text" icon={<ArrowLeftOutlined />} />
        </Link>
        <h1 className="text-3xl font-bold my-5">{course.title}</h1>
      </Flex>
      <img
        src={course.thumbnail_url}
        alt="detail course thumbnail image"
        className="w-full rounded-lg mb-5 h-96"
      />
      <Flex vertical>
        <h3 className="font-semibold text-xl my-3">Tech</h3>
        <Flex gap={16}>
          <SkillLabel skillName="Tailwind" />
          <SkillLabel skillName="Express" />
          <SkillLabel skillName="React" />
          <SkillLabel skillName="Node" />
        </Flex>
        <h3 className="font-semibold text-xl my-3">Prerequisite</h3>
        <Flex gap={16}>
          <SkillLabel skillName="Javascript" />
          <SkillLabel skillName="Algorithm" />
          <SkillLabel skillName="HTML" />
          <SkillLabel skillName="CSS" />
        </Flex>
        <Collapse
          bordered={false}
          defaultActiveKey={['1']}
          expandIcon={({ isActive }) => (
            <CaretRightOutlined rotate={isActive ? 90 : 180} />
          )}
          expandIconPosition="end"
          className="w-full my-8 bg-light-bg"
          items={items}
        />
      </Flex>
    </Flex>
  );
};

export { MainContent };
