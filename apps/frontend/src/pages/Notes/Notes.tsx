import { useParams } from 'react-router';
import { DetailNote, ListNotes } from './components';

const Notes = () => {
  const { id } = useParams();

  return id ? <DetailNote /> : <ListNotes />;
};

export { Notes };
