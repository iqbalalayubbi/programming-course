import { useUser } from '@/stores';
import { Input, Button, Flex, Form } from '@/components';
import { useEffect } from '@/hooks';

const AccountTab = () => {
  const { user } = useUser();
  const [form] = Form.useForm();

  useEffect(() => {
    if (user) {
      form.setFieldsValue({
        username: user.username,
        email: user.email,
        role: user.role,
      });
    }
  }, [user, form]);

  return (
    <Form form={form} layout="vertical" className="w-full space-y-4">
      <Form.Item label="Username" name="username">
        <Input placeholder="username" disabled />
      </Form.Item>
      <Form.Item label="Email" name="email">
        <Input placeholder="email" />
      </Form.Item>
      <Form.Item label="Role" name="role">
        <Input placeholder="role" disabled />
      </Form.Item>
      <Form.Item label="Password" name="password">
        <Input.Password placeholder="password" disabled />
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
