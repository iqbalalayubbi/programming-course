import { Button, Flex, Link } from '@/components';

const NotFound = () => {
  return (
    <Flex
      justify="center"
      align="center"
      vertical
      className="h-screen bg-gray-100"
    >
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <h2 className="mt-4 text-2xl font-semibold">Page Not Found</h2>
      <p className="mt-2 text-gray-600">Sorry, your page is not exist.</p>
      <Link to="/">
        <Button type="primary" className="mt-4">
          Back to Home
        </Button>
      </Link>
    </Flex>
  );
};

export { NotFound };
