import { CustomQuill, Flex, Link } from '@/components';
import { appRoute } from '@/enums';
import { useMentorManagement } from '@/stores';

import { ArrowLeftOutlined, InboxOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { Button, message, Upload } from 'antd';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
const { Dragger } = Upload;

const props: UploadProps = {
  name: 'file',
  action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

const MainContent = () => {
  const navigate = useNavigate();
  const { newCourseName } = useMentorManagement();

  useEffect(() => {
    if (newCourseName === '') {
      navigate(appRoute.MENTOR_MANAGEMENT);
    }
  }, [newCourseName, navigate]);

  return (
    <Flex gap={16} vertical className="h-full">
      <Flex align="center" gap={16}>
        <Link to={appRoute.MENTOR_MANAGEMENT}>
          <Button type="text" icon={<ArrowLeftOutlined />} />
        </Link>
        <h1 className="text-3xl font-bold my-5">{newCourseName}</h1>
      </Flex>
      <Dragger {...props} className="h-1/3">
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibited from
          uploading company data or other banned files.
        </p>
      </Dragger>
      <CustomQuill children className="flex-1 h-full mt-10" />;
    </Flex>
  );
};

export { MainContent };
