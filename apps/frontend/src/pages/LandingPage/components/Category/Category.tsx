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
    <Flex className="h-screen w-screen" align="center" gap={64} vertical>
      <Flex gap={16} vertical align="center">
        <h1 className="font-bold text-4xl leading-normal">Category</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur,
          vitae.
        </p>
      </Flex>
      <Flex gap={24} className="px-10">
        <CategoryCard
          title="Game Development"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur,
        vitae."
          imageUrl={gameDevelopmentIllustration}
        />
        <CategoryCard
          title="Web Development"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur,
        vitae."
          imageUrl={uiUxIllustration}
        />
        <CategoryCard
          title="Data Science"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur,
        vitae."
          imageUrl={dataAnalysisIllustration}
        />
        <CategoryCard
          title="Artificial Intelligence"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur,
        vitae."
          imageUrl={aiIllustration}
        />
      </Flex>
    </Flex>
  );
};

export { Category };
