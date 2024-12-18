import { Button, Collapse, CollapseProps, Flex } from 'antd';

import { challengeSubmissionApi, pistonApi } from '@/api';
import { CustomMonaco } from './components';
import { AxiosResponse } from 'axios';
import { useChallenge, useMonaco } from '@/stores';
import { useState } from 'react';
import {
  ArrowLeftOutlined,
  OutputCode,
  toast,
  ToastContainer,
} from '@/components';
import { Link, useParams } from 'react-router';
import { appRoute } from '@/enums';
import { useChallengeByIdData, useMutation } from '@/hooks';
import { getUsername } from '@/utils';

type Payload = {
  challenge_id: number;
  user_username: string;
};

const Question = () => {
  const { value, setOutput } = useMonaco();
  const [isLoading, setIsLoading] = useState(false);
  const { challenge } = useChallenge();

  const { challengeId } = useParams();

  useChallengeByIdData(Number(challengeId));

  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: 'Question',
      children: <p>{challenge.description}</p>,
    },
    {
      key: '2',
      label: 'Example Output',
      children: <OutputCode output={challenge.output_examples} />,
    },
  ];

  const { mutate } = useMutation({
    mutationKey: ['submit-challenge'],
    mutationFn: async ({ challenge_id, user_username }: Payload) => {
      await challengeSubmissionApi.submitChallenge({
        challenge_id,
        user_username,
        is_submitted: true,
      });
    },
    onSuccess: () => {
      toast.success(
        'Congratulations you have successfully passed the challenge',
      );
    },
    onError: () => {
      toast.error('Failed to pass the challenge');
    },
  });

  const executeCode = async () => {
    setIsLoading(true);
    const response = (await pistonApi.executeCode({
      language: 'js',
      version: '18.15.0',
      code: value,
    })) as AxiosResponse;

    const codeOutput = response.data.run.output;
    const formatOutput = codeOutput.replace(/\r?\n|\r/g, '');

    setOutput(codeOutput);
    setIsLoading(false);

    if (formatOutput === challenge.output_answers) {
      // add point and add challenge submission
      const username = getUsername();

      mutate({ challenge_id: Number(challengeId), user_username: username });
      return;
    }

    toast.error('Try another way');
  };

  return (
    <Flex gap={16} vertical className="min-h-screen mt-3">
      <ToastContainer />
      <Flex align="center" gap={16}>
        <Link to={appRoute.CHALLENGES}>
          <Button type="text" icon={<ArrowLeftOutlined />} />
        </Link>
        <h1 className="text-3xl font-bold my-5">{challenge.title}</h1>
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
