import { appRoute } from '@/enums';
import { Card } from 'antd';
import { Link } from 'react-router';

type Properties = {
  id: number;
  title: string;
  contents: string;
};

const NoteCard = (note: Properties) => {
  return (
    <Link to={`${appRoute.NOTES}/${note.id}`}>
      <Card title={note.title} className="shadow-md" hoverable>
        <p dangerouslySetInnerHTML={{ __html: note.contents }} />
      </Card>
    </Link>
  );
};

export { NoteCard };
