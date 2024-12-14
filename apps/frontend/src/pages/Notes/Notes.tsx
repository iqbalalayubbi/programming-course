import { NoteCard, NotePlaceholder } from './components';

const notesData = [
  {
    title: 'Catatan 1',
    description: 'Deskripsi untuk catatan 1.',
  },
  {
    title: 'Catatan 2',
    description: 'Deskripsi untuk catatan 2.',
  },
  {
    title: 'Catatan 3',
    description: 'Deskripsi untuk catatan 3.',
  },
  {
    title: 'Catatan 4',
    description: 'Deskripsi untuk catatan 4.',
  },
  {
    title: 'Catatan 5',
    description: 'Deskripsi untuk catatan 5.',
  },
];

const Notes = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Halaman Catatan</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {notesData.map((note, index) => (
          <NoteCard
            key={index}
            title={note.title}
            description={note.description}
          />
        ))}
        <NotePlaceholder />
      </div>
    </div>
  );
};

export { Notes };
