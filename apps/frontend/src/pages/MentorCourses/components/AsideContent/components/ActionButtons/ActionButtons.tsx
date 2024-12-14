import { Iconify, FloatButton, SaveOutlined, toast } from '@/components';
import { CourseContent, useCourseContent, useQuill } from '@/stores';
import { useMutation } from '@/hooks';
import { courseContentApi } from '@/api';
import { AxiosResponse } from 'axios';
import { ResponseApiType } from 'common';

const ActionButtons = () => {
  const { courseContent, setCourseContentData } = useCourseContent();
  const { value } = useQuill();

  const updateCourseContent = useMutation({
    mutationKey: ['updateCourseContent'],
    mutationFn: async (payload: { id: number; data: CourseContent }) => {
      const response = await courseContentApi.updateCourseContent(
        payload.id,
        payload.data,
      );
      return response;
    },
    onSuccess: (result) => {
      const response = result as unknown as AxiosResponse;
      const responseData = response.data as ResponseApiType;
      const updatedCourseContent = responseData.data
        ?.courseContent as unknown as CourseContent;
      setCourseContentData(updatedCourseContent);
      toast.success('Course Content updated successfully');
    },
    onError: () => {
      console.error('Failed to update course content');
    },
  });

  const handleSaveContent = () => {
    const updatedData = {
      ...courseContent,
      content: value.trim(),
    };

    updateCourseContent.mutate({
      id: Number(courseContent.id),
      data: updatedData,
    });
  };

  return (
    <FloatButton.Group shape="circle" style={{ insetInlineEnd: 24 }}>
      <FloatButton
        icon={<SaveOutlined />}
        onClick={() => handleSaveContent()}
        tooltip="Save Page"
        type="default"
        style={{ insetInlineEnd: 64 }}
      />
      <FloatButton
        icon={<Iconify icon="uil:upload" />}
        onClick={() => console.log('onClick')}
        tooltip="Upload Course"
        type="primary"
        style={{ insetInlineEnd: 16 }}
      />
    </FloatButton.Group>
  );
};

export { ActionButtons };
