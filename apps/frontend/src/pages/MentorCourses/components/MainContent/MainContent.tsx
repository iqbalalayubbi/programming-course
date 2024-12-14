import { CustomQuill, Flex, Link } from '@/components';
import { appRoute } from '@/enums';
import { uploadPath } from '@/enums/apiPath/uploadPath';
import { useMentorManagement } from '@/stores';

import { ArrowLeftOutlined, InboxOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { Button, message, Upload } from 'antd';
// import { useEffect } from 'react';
import { useState } from 'react';
// import { useNavigate } from 'react-router';
const { Dragger } = Upload;

const MainContent = () => {
  // const navigate = useNavigate();
  const { newCourseName, newCourseData } = useMentorManagement();
  const [isSuccessUpload, setIsSuccessUpload] = useState(false);
  const [newFilename, setNewFilename] = useState('');

  const props: UploadProps = {
    name: 'video',
    action: `${uploadPath.video}?type=course&courseId=${newCourseData.id}`,
    onChange(info) {
      const { status, response } = info.file;

      console.log(response);
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        const filename = response.data.filename;
        setNewFilename(filename);
        setIsSuccessUpload(true);
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };

  // useEffect(() => {
  //   if (newCourseData.title === '') {
  //     navigate(appRoute.MENTOR_MANAGEMENT);
  //   }
  // }, [newCourseData.title, navigate]);

  return (
    <Flex gap={16} vertical className="h-full">
      <Flex align="center" gap={16}>
        <Link to={appRoute.MENTOR_MANAGEMENT}>
          <Button type="text" icon={<ArrowLeftOutlined />} />
        </Link>
        <h1 className="text-3xl font-bold my-5">{newCourseName}</h1>
      </Flex>
      {isSuccessUpload ? (
        <Flex justify="center">
          <video width="600" controls>
            <source
              src={`http://localhost:8000/uploads/${newFilename}`}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </Flex>
      ) : (
        <Dragger {...props} className="h-1/3">
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
          <p className="ant-upload-hint">only support for .mp4 format</p>
        </Dragger>
      )}
      <CustomQuill children className="flex-1 h-full mt-10" />;
    </Flex>
  );
};

export { MainContent };
