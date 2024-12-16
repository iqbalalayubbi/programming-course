import { appRoute } from '@/enums';
import { Card } from 'antd';
import { Link } from 'react-router';

type Properties = {
  title: string;
  contents: string;
};

const NoteCard = (note: Properties) => {
  return (
    <Link to={`${appRoute.NOTES}/1`}>
      <Card title={note.title} className="shadow-md" hoverable>
        <p dangerouslySetInnerHTML={{ __html: note.contents }} />
      </Card>
    </Link>
  );
};

export { NoteCard };
