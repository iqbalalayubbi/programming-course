import { TwoSectionLayout } from '@/layouts';
import { AsideContent, MainContent } from './components';

const CourseManagement = () => {
  return (
    <TwoSectionLayout
      mainContent={<MainContent />}
      asideContent={<AsideContent />}
    />
  );
};

export { CourseManagement };
