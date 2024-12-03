import { Flex } from 'antd';
import { loginIlustration, registerIlustration } from '@/assets';
import { Login, Register } from './libs/components';
import { useEffect, useState } from 'react';
import { titleIllustration } from './libs/enums';

type Properties = {
  pageName: string;
};

const Auth: React.FC<Properties> = ({ pageName }: Properties) => {
  const [illustration, setIllustration] = useState(loginIlustration);
  const [textIllustration, setTextIllustration] = useState('');

  const renderIllustration = (form: string) => {
    if (form === 'login') {
      setIllustration(loginIlustration);
      setTextIllustration(titleIllustration.LOGIN);
    } else {
      setIllustration(registerIlustration);
      setTextIllustration(titleIllustration.REGISTER);
    }
  };

  useEffect(() => {
    renderIllustration(pageName);
  }, [pageName]);

  return (
    <Flex justify="space-between" className="h-screen bg-b">
      {/* left */}
      <Flex
        justify="center"
        align="center"
        vertical
        flex={1}
        className={`${pageName === 'login' ? 'order-1' : 'order-2'}`}
      >
        {pageName === 'login' ? <Login /> : <Register />}
      </Flex>

      {/* right */}
      <Flex
        align="center"
        justify="center"
        vertical
        gap={16}
        flex={1}
        className={`${pageName === 'login' ? 'order-1' : 'order-2'} bg-yellow-50 order-1`}
      >
        <h1 className="text-secondary text-6xl font-bold">
          {textIllustration}
        </h1>
        <img src={illustration} alt="login ilustration" />
      </Flex>
    </Flex>
  );
};

export { Auth };
