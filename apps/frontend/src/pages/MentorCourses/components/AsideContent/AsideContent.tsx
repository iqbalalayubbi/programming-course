import {
  Button,
  Divider,
  Flex,
  List,
  Iconify,
  Modal,
  Input,
} from '@/components';
import { PlusOutlined } from '@ant-design/icons';
import { useState } from 'react';

const FormModalAdd = ({ isShow }: { isShow: boolean }) => {
  return (
    <Modal title="Add New Page" centered open={isShow}>
      <Input placeholder="Enter page name" />
    </Modal>
  );
};

const AsideContent = () => {
  const [isShowModal, setIsShowModal] = useState(true);

  const data = [
    { isActive: true, text: 'Basic HTML' },
    { isActive: false, text: 'Basic CSS' },
    { isActive: false, text: 'Basic Javascript' },
    { isActive: false, text: 'Basic CSS' },
  ];

  const onCreatePage = () => {
    Modal.confirm({
      title: 'Create New Page',
      content: 'Want to create a new page',
      okText: 'Create',
      okButtonProps: { style: { backgroundColor: '#4caf50' } },
      cancelText: 'Cancel',
      onOk: () => setIsShowModal(true),
    });
  };

  return (
    <Flex className="w-full px-5 h-full" justify="space-between" vertical>
      <Flex vertical>
        <h1 className="font-bold text-2xl my-5">Course Content</h1>
        <List
          className="w-full"
          bordered={false}
          dataSource={data}
          renderItem={(item, i) => (
            <>
              <List.Item className="group hover:cursor-pointer hover:bg-primary hover:text-light-text">
                <h3
                  className={`${item.isActive ? 'text-primary font-semibold group-hover:text-light-text' : ''} font-medium text-xl indent-3 block w-full transition-all duration-300`}
                >
                  {item.text}
                </h3>
              </List.Item>
              {i === data.length - 1 && (
                <Button
                  type="text"
                  icon={<PlusOutlined />}
                  iconPosition="end"
                  className="w-full"
                  onClick={onCreatePage}
                >
                  Add Page
                </Button>
              )}
            </>
          )}
        />
      </Flex>
      <Divider orientation="left" className="my-2" />
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

      <FormModalAdd isShow={isShowModal} />
    </Flex>
  );
};

export { AsideContent };
