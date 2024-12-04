import { colorPalette } from '@/enums';
import { ConfigProvider } from 'antd';
import { ReactNode } from 'react';

type Properties = {
  children: ReactNode;
};

const CustomTheme: React.FC<Properties> = ({ children }: Properties) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: colorPalette.PRIMARY,
          colorLinkHover: colorPalette.SECONDARY,
          colorSuccessText: colorPalette.PRIMARY,
          fontSizeIcon: 60,
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export { CustomTheme };
