// import { ilustationHomepage } from '@/assets';
// import { appRoute } from '@/enums';
// import { Layout, Button, Flex } from 'antd';
// import { Link } from 'react-router';
// const { Content } = Layout;

// const HeroSection = () => {
//   return (
//     <Content className="p-20">
//       <Flex justify="space-between">
//         <Flex vertical gap={16} justify="center">
//           <h1 className="font-bold text-6xl leading-normal">
//             Boost Your Study, <br /> With New Journey
//           </h1>
//           <p className="font-medium text-gray-third text-xl w-1/2">
//             Enhance your skills, connect with fellow tech enthusiasts, and
//             access valuable resources. Start your learning journey with us
//             today!
//           </p>
//           <Link to={appRoute.REGISTER}>
//             <Button type="primary" shape="round" className="w-1/2 mt-10">
//               Start Learning
//             </Button>
//           </Link>
//         </Flex>
//         <img src={ilustationHomepage} alt="ilustation" className="w-1/2" />
//       </Flex>
//     </Content>
//   );
// };
// export { HeroSection };

import { ilustationHomepage } from '@/assets';
import { appRoute } from '@/enums';
import { Layout, Button, Flex } from 'antd';
import { Link } from 'react-router'; // Ensure you're using the correct import
const { Content } = Layout;

const HeroSection = () => {
  return (
    <Content className="p-10 md:p-20">
      <Flex
        vertical
        align="center"
        justify="space-between"
        className="md:flex-row"
      >
        <Flex vertical gap={24} justify="center" className="md:w-1/2">
          <h1 className="font-bold text-4xl md:text-6xl md:w-3/4 leading-normal">
            Boost Your Study, With New Journey
          </h1>
          <p className="font-medium text-gray-600 text-lg md:text-xl md:w-3/4">
            Enhance your skills, connect with fellow tech enthusiasts, and
            access valuable resources. Start your learning journey with us
            today!
          </p>
          <Link to={appRoute.REGISTER}>
            <Button
              type="primary"
              shape="round"
              className="w-full md:w-1/2 mt-4"
            >
              Start Learning
            </Button>
          </Link>
        </Flex>
        <img
          src={ilustationHomepage}
          alt="illustration"
          className="w-full md:w-1/2 lg:w-1/3 mt-10 md:mt-0"
        />
      </Flex>
    </Content>
  );
};

export { HeroSection };
