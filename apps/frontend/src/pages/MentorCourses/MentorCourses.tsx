import { TwoSectionLayout } from '@/layouts';
import { AsideContent, MainContent } from './components';
import { useCourseContentData, useSearchParams } from '@/hooks';

const MentorCourses = () => {
  const [queryParameters] = useSearchParams();
  const pageNumber = queryParameters.get('page');
  const courseId = queryParameters.get('course');

  useCourseContentData(Number(courseId), Number(pageNumber));

  return (
    <TwoSectionLayout
      mainContent={<MainContent />}
      asideContent={<AsideContent />}
    />
  );
};

export { MentorCourses };
