import { Flex } from 'antd';
import { CategoryCard } from './components';
import {
  aiIllustration,
  dataAnalysisIllustration,
  gameDevelopmentIllustration,
  uiUxIllustration,
} from '@/assets';

const Category = () => {
  return (
    <Flex
      className="h-screen w-screen"
      align="center"
      gap={64}
      vertical
      id="category"
    >
      <Flex gap={16} vertical align="center">
        <h1 className="font-bold text-4xl leading-normal">Category</h1>
        <p className="w-3/4 text-center">
          Explore diverse tech fields and enhance your skills in development,
          data analysis, and AI.
        </p>
      </Flex>
      <Flex gap={24} className="px-10">
        <CategoryCard
          title="Game Development"
          description="Dive into the exciting world of game development, Create and launch your own games across platforms."
          imageUrl={gameDevelopmentIllustration}
        />
        <CategoryCard
          title="Web Development"
          description="Explore the fundamentals of web development, including front-end and back-end technologies.
"
          imageUrl={uiUxIllustration}
        />
        <CategoryCard
          title="Data Science"
          description="Unlock the power of data with our data science courses. Analyze and visualize data for informed decisions."
          imageUrl={dataAnalysisIllustration}
        />
        <CategoryCard
          title="Artificial Intelligence"
          description="Step into the future with artificial intelligence. Develop intelligent systems that learn and adapt."
          imageUrl={aiIllustration}
        />
      </Flex>
    </Flex>
  );
};

export { Category };
