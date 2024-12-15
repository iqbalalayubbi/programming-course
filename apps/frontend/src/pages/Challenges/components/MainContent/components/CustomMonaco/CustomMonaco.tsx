import Editor from '@monaco-editor/react';

import { useMonaco } from '@/stores';

const CustomMonaco = () => {
  const { value, setValue } = useMonaco();

  return (
    <Editor
      height="50vh"
      defaultLanguage="javascript"
      theme="vs-dark"
      onChange={(val: string | undefined) => setValue(val as string)}
      value={value}
      defaultValue="// Your code here"
      options={{ fontSize: 16 }}
    />
  );
};

export { CustomMonaco };
