import { CreateNote, NoteCard, NotePlaceholder } from './components';
import { getUsername } from '@/utils';
import { useNoteData } from '@/hooks';
import { useNote } from '@/stores';

const ListNotes = () => {
  const { notes } = useNote();

  const username = getUsername();
  useNoteData(username);

  return (
    <div className="container mx-0 sm:mx-8 p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {notes.map((note, index) => (
          <NoteCard key={index} title={note.title} contents={note.contents} />
        ))}
        <NotePlaceholder />
      </div>
      <CreateNote />
    </div>
  );
};

export { ListNotes };
