import { Divider, Flex } from '@/components';
import {
  ActionButtons,
  ControlButton,
  ListCourseContents,
  UploadThumbnail,
} from './components';

const AsideContent = () => {
  return (
    <Flex className="w-full px-5 h-full" justify="space-between" vertical>
      <h1 className="font-bold text-2xl my-5">Course Content</h1>
      <UploadThumbnail />
      <ListCourseContents />
      <Divider orientation="left" className="my-2" />
      <ControlButton />
      <ActionButtons />
    </Flex>
  );
};

export { AsideContent };
