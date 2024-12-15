// import { Flex } from 'antd';
// import { ChallengeCard } from './components';

// const MainContent = () => {
//   return (
//     <Flex vertical gap={16} className="mt-5">
//       <h1 className="text-2xl font-semibold">Challenge List</h1>
//       <ChallengeCard />
//     </Flex>
//   );
// };
// export { MainContent };

import { Button, Card, Flex } from 'antd';

import { pistonApi } from '@/api';
import { CustomMonaco } from './components';
import { AxiosResponse } from 'axios';
import { useMonaco } from '@/stores';
import { useState } from 'react';

const MainContent = () => {
  const { value, setOutput } = useMonaco();
  const [isLoading, setIsLoading] = useState(false);

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
    <Flex align="center" gap={16} vertical className="min-h-screen mt-3">
      <Card title="Sum of Two Numbers" bordered={false} className="w-full">
        <p>
          Create a function add that takes two number parameters and returns
          their sum.
        </p>
      </Card>
      <div className="w-full">
        <CustomMonaco />
      </div>
      <Button
        type="primary"
        className="w-1/2"
        onClick={executeCode}
        loading={isLoading}
      >
        Run Code
      </Button>
    </Flex>
  );
};

export { MainContent };
