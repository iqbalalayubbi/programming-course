import { appRoute } from '@/enums';
import { Card } from 'antd';
import { Link } from 'react-router';

type Properties = {
  title: string;
  description: string;
};

const NoteCard = (note: Properties) => {
  return (
    <Link to={`${appRoute.NOTES}/1`}>
      <Card title={note.title} className="shadow-md" hoverable>
        <p>{note.description}</p>
      </Card>
    </Link>
  );
};

export { NoteCard };
