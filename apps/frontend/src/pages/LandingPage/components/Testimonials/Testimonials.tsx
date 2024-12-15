import { Flex } from 'antd';
import { TestimonialCard } from './components';
import {
  bossAvatarIllustration,
  manAvatarIllustration,
  womanAvatarIllustration,
} from '@/assets';

const Testimonials = () => {
  return (
    <Flex className="w-screen mt-40" align="center" gap={64} vertical>
      <Flex vertical align="center">
        <h1 className="font-bold text-4xl leading-normal">What They Said</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur,
          vitae.
        </p>
      </Flex>
      <Flex gap={16} justify="center">
        <TestimonialCard
          name="Kemal Saka"
          feedback="Amazing course i guess, best mentor ever"
          imageUrl={bossAvatarIllustration}
        />
        <TestimonialCard
          name="Sofia Mala"
          feedback="Amazing course i guess, best mentor ever"
          imageUrl={womanAvatarIllustration}
        />
        <TestimonialCard
          name="Rizky Davide"
          feedback="Amazing course i guess, best mentor ever"
          imageUrl={manAvatarIllustration}
        />
      </Flex>
    </Flex>
  );
};

export { Testimonials };
