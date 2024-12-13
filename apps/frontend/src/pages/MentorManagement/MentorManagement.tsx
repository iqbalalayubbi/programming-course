import { TwoSectionLayout } from '@/layouts';
import { AsideContent, MainContent } from './components';

const MentorManagement = () => {
  return (
    <>
      <TwoSectionLayout
        mainContent={<MainContent />}
        asideContent={<AsideContent />}
      />
    </>
  );
};

export { MentorManagement };
