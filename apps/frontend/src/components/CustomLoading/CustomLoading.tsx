import { Spin } from 'antd';

type Properties = {
  isLoading: boolean;
};

const CustomLoading = ({ isLoading }: Properties) => {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-500/50 fixed inset-0 z-50">
        <div className="flex flex-col items-center">
          <Spin size="large" />
          <p className="mt-4 text-lg text-gray-700">Loading...</p>
        </div>
      </div>
    );
  }
  return null;
};

export { CustomLoading };
