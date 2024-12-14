import { useDetailCourseData, useState, useUserData } from '@/hooks';
import {
  Flex,
  message,
  Upload,
  Spin,
  ToastContainer,
  toast,
} from '@/components';
import type { GetProp, UploadProps } from '@/types';
import { uploadPath } from '@/enums/apiPath/uploadPath';
import { useCourse } from '@/stores';
import { useSearchParams } from 'react-router';

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const getBase64 = (img: FileType, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const beforeUpload = (file: FileType) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};

const UploadThumbnail = () => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();
  const { refetch } = useUserData();
  const { course } = useCourse();
  const [queryParameters] = useSearchParams();

  const courseId = Number(queryParameters.get('course'));
  const { refetch: refetchDetailCourseData } = useDetailCourseData(courseId);

  const handleChange: UploadProps['onChange'] = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj as FileType, (url) => {
        setLoading(false);
        toast.success('update profile image successfully');
        refetch();
        refetchDetailCourseData();
        setImageUrl(url);
      });
    }
  };

  return (
    <Flex wrap>
      <ToastContainer />
      <Upload
        name="photo"
        className="avatar-uploader w-full h-60 flex justify-center"
        showUploadList={false}
        action={`${uploadPath.photo}?type=course&courseId=${course.id}`}
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {imageUrl ? (
          <img
            src={course.thumbnail_url ? course.thumbnail_url : imageUrl}
            alt=""
            className="w-full h-full hover:cursor-pointer hover:opacity-80 transition-all duration-300"
          />
        ) : (
          <Flex className="w-full h-full">
            {loading ? (
              <Spin spinning />
            ) : (
              <img
                src={course.thumbnail_url ? course.thumbnail_url : imageUrl}
                alt=""
                className="w-full h-full hover:cursor-pointer hover:opacity-80 transition-all duration-300"
              />
            )}
          </Flex>
        )}
      </Upload>
    </Flex>
  );
};

export { UploadThumbnail };
