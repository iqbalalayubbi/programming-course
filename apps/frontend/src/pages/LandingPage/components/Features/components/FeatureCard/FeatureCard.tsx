import { Flex } from 'antd';

type Properties = {
  imageUrl: string;
  title: string;
  description: string;
};

const FeatureCard = ({ title, description, imageUrl }: Properties) => {
  return (
    <Flex gap={16} align="center">
      <img src={imageUrl} alt="feature-illustration" width={100} />
      <Flex vertical>
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="w-3/4">{description}</p>
      </Flex>
    </Flex>
  );
};
export { FeatureCard };
