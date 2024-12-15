// import { Avatar, Flex } from 'antd';

// type Properties = {
//   name: string;
//   feedback: string;
//   imageUrl: string;
// };

// const TestimonialCard = ({ name, feedback, imageUrl }: Properties) => {
//   return (
//     <Flex gap={8} vertical align="center" className="w-1/4">
//       <Avatar src={imageUrl} size={100} />
//       <h1 className="font-bold text-2xl leading-normal">{name}</h1>
//       <p className="text-center w-1/2 italic text-gray-third">{feedback}</p>
//     </Flex>
//   );
// };

// export { TestimonialCard };

// TestimonialCard.tsx
import { Avatar, Flex } from 'antd';

type Properties = {
  name: string;
  feedback: string;
  imageUrl: string;
};

const TestimonialCard = ({ name, feedback, imageUrl }: Properties) => {
  return (
    <Flex gap={8} vertical align="center" className="w-full md:w-1/3">
      <Avatar src={imageUrl} size={100} />
      <h1 className="font-bold text-xl md:text-2xl leading-normal">{name}</h1>
      <p className="text-center w-1/3 md:w-3/4 italic text-gray-600">
        {feedback}
      </p>
    </Flex>
  );
};

export { TestimonialCard };
