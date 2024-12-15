import { Card } from 'antd';

type Properties = {
  imageUrl: string;
  title: string;
  description: string;
};

const CategoryCard = ({ title, description, imageUrl }: Properties) => {
  return (
    <Card
      className="shadow-lg w-1/4"
      cover={<img src={imageUrl} alt="illustration" className="h-60" />}
      hoverable
    >
      <h3 className="text-2xl font-semibold text-center mb-5">{title}</h3>
      <p className="text-center">{description}</p>
    </Card>
  );
};

export { CategoryCard };
