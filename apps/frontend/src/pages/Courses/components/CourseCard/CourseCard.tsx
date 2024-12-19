import { Card, Flex, Rate } from '@/components';
import { appRoute } from '@/enums';
import { useNavigate } from '@/hooks';
import { Col, Row } from 'antd';

type Properties = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
};

const CourseCard = ({ id, title, description, imageUrl }: Properties) => {
  const navigate = useNavigate();

  return (
    <Card
      className={`shadow-lg w-full lg:w-full group`}
      cover={<img src={imageUrl} alt="image-course" className="h-40" />}
      hoverable
      onClick={() => navigate(`${appRoute.COURSES}/${id}`)}
    >
      <Flex className="mt-2" vertical>
        <h3 className="font-semibold text-gray-800 text-xl group-hover:text-secondary">
          {title}
        </h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </Flex>
      <Flex className="mt-4" gap={16} vertical>
        <Row gutter={[8, 8]}>
          <Col>
            <span className="bg-yellow-500 text-white px-3 py-1 rounded-full">
              JS
            </span>
          </Col>
          <Col>
            <span className="bg-blue-400 text-white px-3 py-1 rounded-full">
              React
            </span>
          </Col>
          <Col>
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full">
              Tailwind
            </span>
          </Col>
        </Row>
        <Flex justify="space-between" align="center">
          <span className="text-gray-third text-xs">200 reviews</span>
          <Rate disabled allowHalf defaultValue={4.5} className="text-lg" />
        </Flex>
      </Flex>
    </Card>
  );
};

export { CourseCard };
