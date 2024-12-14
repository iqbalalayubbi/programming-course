import {
  Button,
  Divider,
  Flex,
  List,
  Modal,
  Input,
  PlusOutlined,
} from '@/components';
import { useState } from '@/hooks';
import { ActionButtons, ControlButton, UploadThumbnail } from './components';

const AsideContent = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  const renderCreateForm = () => {
    return (
      <Modal
        title="Add New Page"
        centered
        open={isShowModal}
        onCancel={() => setIsShowModal(false)}
      >
        <Input placeholder="Enter page name" />
      </Modal>
    );
  };

  const data = [
    { isActive: true, text: 'Basic HTML' },
    { isActive: false, text: 'Basic CSS' },
    { isActive: false, text: 'Basic Javascript' },
    { isActive: false, text: 'Basic CSS' },
  ];

  return (
    <Flex className="w-full px-5 h-full" justify="space-between" vertical>
      <h1 className="font-bold text-2xl my-5">Course Content</h1>
      <UploadThumbnail />
      <Flex vertical>
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
                  onClick={() => setIsShowModal(true)}
                >
                  Add Page
                </Button>
              )}
            </>
          )}
        />
      </Flex>

      <Divider orientation="left" className="my-2" />
      <ControlButton />

      <ActionButtons />
      {renderCreateForm()}
    </Flex>
  );
};

export { AsideContent };
