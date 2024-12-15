import { Flex } from 'antd';
import { ReactNode } from 'react';

type Properties = {
  mainContent: ReactNode;
  asideContent: ReactNode;
};

const TwoSectionLayout = ({ mainContent, asideContent }: Properties) => {
  return (
    <Flex className="h-screen overflow-auto lg:h-screen  lg:flex-row flex-col">
      <Flex className="h-full w-full bg-light-bg lg:mx-10 px-10 py-3" vertical>
        {mainContent}
      </Flex>
      <Flex
        className="w-full lg:w-1/2 bg-white h-full"
        gap={16}
        align="center"
        vertical
      >
        {asideContent}
      </Flex>
    </Flex>
  );
};

export { TwoSectionLayout };
