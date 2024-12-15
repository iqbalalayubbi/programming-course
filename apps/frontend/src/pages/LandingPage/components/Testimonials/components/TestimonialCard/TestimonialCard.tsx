import { Avatar, Flex } from 'antd';

type Properties = {
  name: string;
  feedback: string;
  imageUrl: string;
};

const TestimonialCard = ({ name, feedback, imageUrl }: Properties) => {
  return (
    <Flex gap={8} vertical align="center" className="w-1/4">
      <Avatar src={imageUrl} size={100} />
      <h1 className="font-bold text-2xl leading-normal">{name}</h1>
      <p className="text-center w-1/2 italic text-gray-third">{feedback}</p>
    </Flex>
  );
};

export { TestimonialCard };
