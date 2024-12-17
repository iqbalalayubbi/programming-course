import { useParams } from 'react-router';
import { DetailNote, ListNotes } from './components';

const Notes = () => {
  const { noteId } = useParams();

  return noteId ? <DetailNote /> : <ListNotes />;
};

export { Notes };
