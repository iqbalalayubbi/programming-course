import { useState } from '@/hooks';
import { Avatar, Flex, message, Upload, Spin, Iconify } from '@/components';
import type { GetProp, UploadProps } from '@/types';
import { uploadPath } from '@/enums/apiPath/uploadPath';

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

const UserAvatar = () => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();

  const handleChange: UploadProps['onChange'] = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj as FileType, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  return (
    <Flex gap="middle" wrap>
      <Upload
        name="photo"
        className="avatar-uploader"
        showUploadList={false}
        action={uploadPath.photo}
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {imageUrl ? (
          <Avatar src={imageUrl} alt="avatar" shape="circle" size={200} />
        ) : (
          <Avatar
            icon={
              loading ? (
                <Spin spinning />
              ) : (
                <Iconify icon="carbon:user-avatar" />
              )
            }
            size={150}
            className="bg-slate-200 hover:bg-slate-400 transition-all duration-300 hover:cursor-pointer"
          />
        )}
      </Upload>
    </Flex>
  );
};

export { UserAvatar };
