import { useState } from '@/hooks';
import { Flex, FlexProps } from 'antd';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function CustomQuill(props: FlexProps) {
  const [value, setValue] = useState('');

  return (
    <Flex vertical {...props}>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        className="h-full w-full"
      />
    </Flex>
  );
}

export { CustomQuill };
