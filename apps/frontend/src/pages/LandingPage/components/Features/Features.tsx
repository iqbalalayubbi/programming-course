import {
  challengeIllustration,
  courseIllustration,
  noteIllustration,
  peopleIllustration,
} from '@/assets';
import { Flex } from 'antd';
import { FeatureCard } from './components';

const Features = () => {
  return (
    <Flex className="h-screen w-screen" align="center" gap={64} vertical>
      <Flex gap={16} vertical align="center">
        <h1 className="font-bold text-4xl leading-normal">Our Features</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur,
          vitae.
        </p>
      </Flex>
      <Flex
        gap={32}
        align="center"
        justify="space-between"
        className="w-full px-20"
      >
        <img src={peopleIllustration} alt="" />
        <Flex vertical gap={32}>
          <FeatureCard
            title="Note"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur,
          vitae."
            imageUrl={noteIllustration}
          />
          <FeatureCard
            title="Note"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur,
          vitae."
            imageUrl={courseIllustration}
          />
          <FeatureCard
            title="Note"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur,
          vitae."
            imageUrl={challengeIllustration}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};
export { Features };
