import { useMonaco } from '@/stores';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const OutputCode = () => {
  const { output } = useMonaco();
  return (
    <SyntaxHighlighter
      language="javascript"
      style={a11yDark}
      customStyle={{
        height: 200,
        borderRadius: 10,
        textIndent: 10,
        overflow: 'auto',
      }}
    >
      {output}
    </SyntaxHighlighter>
  );
};

export { OutputCode };
