import { Flex, Select } from 'antd';
import { CourseCard, HeaderCourse } from './components';

const Courses = () => {
  return (
    <Flex className="mx-10 my-5" gap={16} vertical>
      <HeaderCourse />
      <Flex gap={8}>
        <Select
          placeholder="Category"
          style={{ width: 120 }}
          options={[
            { value: 'jack', label: 'Jack' },
            { value: 'lucy', label: 'Lucy' },
            { value: 'Yiminghe', label: 'yiminghe' },
          ]}
        />
        <Select
          placeholder="Filter By"
          style={{ width: 120 }}
          options={[
            { value: 'jack', label: 'Jack' },
            { value: 'lucy', label: 'Lucy' },
            { value: 'Yiminghe', label: 'yiminghe' },
          ]}
        />
      </Flex>
      <Flex gap={16} className="flex-wrap">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </Flex>
    </Flex>
  );
};

export { Courses };
