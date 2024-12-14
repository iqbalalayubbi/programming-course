import { Flex } from '@/components';
import { uploadPath } from '@/enums/apiPath/uploadPath';
import { useMentorManagement } from '@/stores';
import { InboxOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { message, Upload } from 'antd';
import { useState } from 'react';
const { Dragger } = Upload;

const UploadVideo = () => {
  const { newCourseData } = useMentorManagement();
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

  if (isSuccessUpload) {
    return (
      <Flex justify="center">
        <video width="600" controls>
          <source
            src={`http://localhost:8000/uploads/${newFilename}`}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </Flex>
    );
  }

  return (
    <Dragger {...props} className="h-1/3">
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">
        Click or drag file to this area to upload
      </p>
      <p className="ant-upload-hint">only support for .mp4 format</p>
    </Dragger>
  );
};

export { UploadVideo };
