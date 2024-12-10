import { Input, Button, Flex, Form } from 'antd';

const AccountTab = () => {
  return (
    <Form layout="vertical" className="w-full space-y-4">
      <Form.Item label="Username" name="username">
        <Input placeholder="username" />
      </Form.Item>
      <Form.Item label="Email" name="email">
        <Input placeholder="email" />
      </Form.Item>
      <Form.Item label="Role" name="role">
        <Input placeholder="role" />
      </Form.Item>
      <Form.Item label="Password" name="password">
        <Input.Password placeholder="password" />
      </Form.Item>
      <Form.Item className="w-full">
        <Flex gap={16} vertical>
          <Button type="primary" htmlType="submit" disabled className="w-full">
            Save
          </Button>
          <Button type="default" htmlType="submit" className="w-full">
            Change Password
          </Button>
        </Flex>
      </Form.Item>
    </Form>
  );
};

export { AccountTab };
