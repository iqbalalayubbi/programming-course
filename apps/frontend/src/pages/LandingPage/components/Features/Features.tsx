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
    <Flex
      className="h-screen w-screen"
      align="center"
      gap={64}
      vertical
      id="features"
    >
      <Flex gap={16} vertical align="center">
        <h1 className="font-bold text-4xl leading-normal">Our Features</h1>
        <p className="w-3/4 text-center">
          Discover the key features that enhance your learning experience and
          support your growth in technology.
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
            title="Free Course"
            description="Access a variety of free courses to kickstart your learning journey."
            imageUrl={courseIllustration}
          />
          <FeatureCard
            title="Note"
            description="Take notes and keep track of important information easily."
            imageUrl={noteIllustration}
          />
          <FeatureCard
            title="Challenge"
            description="Engage in challenges to test your skills and knowledge."
            imageUrl={challengeIllustration}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};
export { Features };
