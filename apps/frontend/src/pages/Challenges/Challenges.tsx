import { TwoSectionLayout } from '@/layouts';
import { AsideContent, MainContent } from './components';

const Challenges = () => {
  return (
    <TwoSectionLayout
      mainContent={<MainContent />}
      asideContent={<AsideContent />}
    />
  );
};

export { Challenges };
