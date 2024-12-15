import { Button, Collapse, CollapseProps, Flex } from 'antd';

import { pistonApi } from '@/api';
import { CustomMonaco } from './components';
import { AxiosResponse } from 'axios';
import { useMonaco } from '@/stores';
import { useState } from 'react';
import { ArrowLeftOutlined, OutputCode } from '@/components';
import { Link } from 'react-router';
import { appRoute } from '@/enums';

const Question = () => {
  const { value, setOutput } = useMonaco();
  const [isLoading, setIsLoading] = useState(false);

  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: 'Question',
      children: (
        <p>
          Create a function add that takes two number parameters and returns
          their sum.
        </p>
      ),
    },
    {
      key: '2',
      label: 'Example Output',
      children: <OutputCode output="something" />,
    },
  ];

  const executeCode = async () => {
    setIsLoading(true);
    const response = (await pistonApi.executeCode({
      language: 'js',
      version: '18.15.0',
      code: value,
    })) as AxiosResponse;

    const codeOutput = response.data.run.output;
    setOutput(codeOutput);
    setIsLoading(false);
  };

  return (
    <Flex gap={16} vertical className="min-h-screen mt-3">
      <Flex align="center" gap={16}>
        <Link to={appRoute.CHALLENGES}>
          <Button type="text" icon={<ArrowLeftOutlined />} />
        </Link>
        <h1 className="text-3xl font-bold my-5">Add two of numbers</h1>
      </Flex>
      <Collapse
        items={items}
        defaultActiveKey={['1']}
        className="w-full"
        bordered={false}
      />
      ;
      <div className="w-full">
        <CustomMonaco />
      </div>
      <Button
        type="primary"
        className="w-1/2 bg-secondary self-center"
        onClick={executeCode}
        loading={isLoading}
      >
        Run Code
      </Button>
    </Flex>
  );
};

export { Question };
