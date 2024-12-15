import { Flex, Input } from 'antd';

const HeaderCourse = () => {
  return (
    <Flex
      justify="center"
      align="center"
      className="relative h-60 bg-gradient-to-br from-green-400 to-yellow-400 rounded-lg overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="bg-white opacity-10 rounded-full h-32 w-32 animate-pulse absolute top-10 left-10"></div>
        <div className="bg-white opacity-10 rounded-full h-48 w-48 animate-pulse absolute top-20 right-20"></div>
        <div className="bg-white opacity-10 rounded-full h-24 w-24 animate-pulse absolute bottom-10 left-20"></div>
        <div className="bg-white opacity-10 rounded-full h-36 w-36 animate-pulse absolute bottom-20 right-10"></div>
      </div>
      <Flex gap={16} vertical className="w-1/3">
        <h1 className="text-white text-4xl font-bold z-10 text-center">
          Find Your Course
        </h1>
        <Input placeholder="Find your best course..." />
      </Flex>
    </Flex>
  );
};

export { HeaderCourse };
