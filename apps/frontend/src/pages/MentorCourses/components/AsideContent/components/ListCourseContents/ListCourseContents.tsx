// import { courseContentApi } from '@/api';
import { Button, Input, List, Modal, PlusOutlined } from '@/components';
import { useMentorManagement } from '@/stores';
// import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { useSearchParams } from 'react-router';

const ListCourseContents = () => {
  const [isShowModal, setIsShowModal] = useState(true);
  const { newCourseData, setNewCourseData } = useMentorManagement();
  const [queryParameters] = useSearchParams();
  const [pageName, setPageName] = useState('');

  // useMutation({
  //   mutationKey: ['addCourseContent'],
  //   //   course_id: Joi.number().integer().required(),
  //   // page: Joi.number().integer().required(),
  //   // content: Joi.string(),
  //   // video_url: Joi.string().uri(),
  //   mutationFn: async (courseId: number, data:) => {
  //     const response = await courseContentApi.createCourseContent(
  //       courseId,
  //       data,
  //     );
  //     return response;
  //   },
  //   onSuccess: (result) => {
  //     console.log(result);
  //     // Refresh the course content list
  //   },
  //   onError: () => {
  //     // Show error message
  //   },
  // });

  const handleAddCourseContent = () => {
    const pageNumber = queryParameters.get('page');
    if (newCourseData.id) {
      const newCourseContent = {
        ...newCourseData,
        title: pageName,
        page: Number(pageNumber),
      };

      setNewCourseData(newCourseContent);
    }
  };

  const renderCreateForm = () => {
    return (
      <Modal
        title="Add New Page"
        centered
        open={isShowModal}
        onCancel={() => setIsShowModal(false)}
        onOk={handleAddCourseContent}
      >
        <Input
          placeholder="Enter page name"
          value={pageName}
          onChange={(e) => setPageName(e.target.value)}
        />
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
