import { TwoSectionLayout } from '@/layouts';
import { AsideContent, MainContent } from './components';

const MentorCourses = () => {
  return (
    <TwoSectionLayout
      mainContent={<MainContent />}
      asideContent={<AsideContent />}
    />
  );
};

export { MentorCourses };
