import { Flex } from '@/components';
import { uploadPath } from '@/enums/apiPath/uploadPath';
import { useCourseContent } from '@/stores';
import { InboxOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { message, Upload } from 'antd';
import { useEffect, useState } from 'react';
const { Dragger } = Upload;

const UploadVideo = () => {
  const [, setIsSuccessUpload] = useState(false);
  const [newFilename, setNewFilename] = useState('');
  const { courseContent, setCourseContentData } = useCourseContent();

  const props: UploadProps = {
    name: 'video',
    action: `${uploadPath.video}?type=course&courseContentId=${courseContent.id}`,
    onChange(info) {
      const { status, response } = info.file;

      // if (status !== 'uploading') {
      //   console.log(info.file, info.fileList);
      // }
      if (status === 'done') {
        const filename = response.data.filename;
        const newVideoUrl = import.meta.env.VITE_BASE_UPLOADS_URL + filename;
        setNewFilename(newVideoUrl);
        setIsSuccessUpload(true);
        setCourseContentData({
          ...courseContent,
          video_url: newVideoUrl,
        });
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    // onDrop(e) {
    //   console.log('Dropped files', e.dataTransfer.files);
    // },
  };

  useEffect(() => {
    if (courseContent.video_url) {
      setNewFilename(courseContent.video_url);
      setIsSuccessUpload(true);
    } else {
      setNewFilename('');
    }
  }, [courseContent]);

  return (
    <>
      {newFilename ? (
        <Flex justify="center" vertical>
          <video key={courseContent.video_url} width="600" controls>
            <source src={courseContent.video_url} type="video/mp4" />
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
    </>
  );
};

export { UploadVideo };
