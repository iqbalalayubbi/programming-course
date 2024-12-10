import { TwoSectionLayout } from '@/layouts';
import { AsideContent, MainContent } from './components';

const StudyRoom = () => {
  return (
    <TwoSectionLayout
      mainContent={<MainContent />}
      asideContent={<AsideContent />}
    />
  );
};
export { StudyRoom };
