import { Button, Input, List, Modal, PlusOutlined } from '@/components';
import { useState } from 'react';

const ListCourseContents = () => {
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
    <>
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
      {renderCreateForm()}
    </>
  );
};

export { ListCourseContents };
