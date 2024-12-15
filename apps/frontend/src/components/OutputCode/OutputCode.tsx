import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

type Properties = {
  output: string;
  customStyle?: React.CSSProperties;
};

const OutputCode = ({ output, customStyle }: Properties) => {
  return (
    <SyntaxHighlighter
      language="javascript"
      style={a11yDark}
      customStyle={customStyle}
    >
      {output}
    </SyntaxHighlighter>
  );
};

export { OutputCode };
