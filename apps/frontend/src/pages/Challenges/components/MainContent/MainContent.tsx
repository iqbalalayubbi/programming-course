import { useParams } from 'react-router';
import { ListChallenge, Question } from './components';

const MainContent = () => {
  const { challengeId } = useParams();

  return challengeId ? <Question /> : <ListChallenge />;
};

export { MainContent };
