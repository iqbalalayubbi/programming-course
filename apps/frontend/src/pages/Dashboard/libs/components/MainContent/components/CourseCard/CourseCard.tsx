import { Button, Flex, Progress } from 'antd';
import { thumbnailCourse } from '@/assets';
import { colorPalette } from '@/enums';

const CourseCard = () => {
  return (
    <Flex gap={32} align="center" className="bg-light-bg p-5 w-full rounded-md">
      <img src={thumbnailCourse} alt="thumbnail course" />
      <Flex align="end" justify="space-between" gap={32} className="w-full">
        <Flex gap={16} vertical>
          <h1>Build your first own portofolio</h1>
          <Flex gap={8}>
            <span className="bg-yellow-500 px-5 rounded-full text-white">
              JS
            </span>
            <span className="bg-purple-500 px-5 rounded-full text-white">
              React
            </span>
            <span className="bg-pink-500 px-5 rounded-full text-white">
              Tailwind
            </span>
          </Flex>
          <Progress
            percent={100}
            percentPosition={{ align: 'center', type: 'inner' }}
            size={[400, 20]}
            strokeColor={colorPalette.PRIMARY}
            trailColor={colorPalette.GRAY_THIRD}
            type="line"
          />
        </Flex>
        <Button type="primary">View Course</Button>
      </Flex>
    </Flex>
  );
};

export { CourseCard };
