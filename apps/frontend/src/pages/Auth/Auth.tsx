import { Flex } from 'antd';
import {
  forgotPasswordIllustration,
  loginIlustration,
  registerIlustration,
} from '@/assets';
import { ForgotPassword, Login, Register } from './libs/components';
import { useEffect, useState } from 'react';
import { titleIllustration } from './libs/enums';

type Properties = {
  pageName: string;
};

const Auth: React.FC<Properties> = ({ pageName }: Properties) => {
  const [illustration, setIllustration] = useState(loginIlustration);
  const [textIllustration, setTextIllustration] = useState('');

  const renderIllustration = (form: string) => {
    switch (form) {
      case 'login':
        setIllustration(loginIlustration);
        setTextIllustration(titleIllustration.LOGIN);
        break;
      case 'register':
        setIllustration(registerIlustration);
        setTextIllustration(titleIllustration.REGISTER);
        break;
      case 'forgot-password':
        setIllustration(forgotPasswordIllustration);
        setTextIllustration(titleIllustration.FORGOT_PASSWORD);
        break;
      default:
        break;
    }
  };

  const renderForm = (form: string) => {
    switch (form) {
      case 'register':
        return <Register />;
      case 'login':
        return <Login />;
      case 'forgot-password':
        return <ForgotPassword />;
      default:
        return null;
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
        className={`${pageName === 'register' ? 'order-2' : 'order-1'}`}
      >
        {renderForm(pageName)}
      </Flex>

      {/* right */}
      <Flex
        align="center"
        justify="center"
        vertical
        gap={16}
        flex={1}
        className={`${pageName === 'register' ? 'order-1' : 'order-2'} bg-yellow-50`}
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
