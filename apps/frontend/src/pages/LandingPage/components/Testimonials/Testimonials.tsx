import { Flex } from 'antd';
import { TestimonialCard } from './components';
import {
  bossAvatarIllustration,
  manAvatarIllustration,
  womanAvatarIllustration,
} from '@/assets';

const Testimonials = () => {
  return (
    <Flex
      className="w-screen mt-40"
      align="center"
      gap={64}
      vertical
      id="testimonials"
    >
      <Flex vertical align="center">
        <h1 className="font-bold text-4xl leading-normal">What They Said</h1>
        <p>
          Hear from our satisfied learners about their experiences and the
          impact of our courses.
        </p>
      </Flex>
      <Flex gap={16} justify="center">
        <TestimonialCard
          name="Alex Johnson"
          feedback='"Transformative courses that truly enhance your skills. The mentorship is exceptional!"'
          imageUrl={bossAvatarIllustration}
        />
        <TestimonialCard
          name="Mia Chen"
          feedback='"An incredible learning experience! The support from instructors made all the difference."'
          imageUrl={womanAvatarIllustration}
        />
        <TestimonialCard
          name="Leo Martinez"
          feedback='"Engaging content and practical challenges. I feel more confident in my abilities!"'
          imageUrl={manAvatarIllustration}
        />
      </Flex>
    </Flex>
  );
};

export { Testimonials };
