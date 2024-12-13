import { useState } from '@/hooks';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function CustomQuill() {
  const [value, setValue] = useState('');

  return <ReactQuill theme="snow" value={value} onChange={setValue} />;
}

export { CustomQuill };
