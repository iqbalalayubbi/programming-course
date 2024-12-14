import { Button, Flex, Iconify } from '@/components';
import {} from '@ant-design/icons';

const ControlButton = () => {
  return (
    <Flex gap={60} justify="center" className="my-5 gap-4">
      <Flex gap={24} align="center" vertical className="group">
        <Button
          type="link"
          shape="circle"
          icon={<Iconify icon="grommet-icons:previous" />}
          className="text-6xl group-hover:text-secondary"
        />
        <span className="group-hover:text-secondary font-semibold text-gray-third">
          Prev
        </span>
      </Flex>
      <Flex gap={24} align="center" vertical className="group">
        <Button
          type="link"
          shape="circle"
          icon={<Iconify icon="grommet-icons:next" />}
          className="text-6xl group-hover:text-secondary"
        />
        <span className="group-hover:text-secondary font-semibold text-gray-third">
          Next
        </span>
      </Flex>
    </Flex>
  );
};

export { ControlButton };
