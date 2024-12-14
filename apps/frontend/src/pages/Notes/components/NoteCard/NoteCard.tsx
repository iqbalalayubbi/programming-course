import { Card } from 'antd';

type Properties = {
  title: string;
  description: string;
};

const NoteCard = (note: Properties) => {
  return (
    <Card title={note.title} className="shadow-md" hoverable>
      <p>{note.description}</p>
    </Card>
  );
};

export { NoteCard };
