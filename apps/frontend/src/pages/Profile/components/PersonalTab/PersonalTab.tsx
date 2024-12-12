import { Input, Button, Form, Select, DatePicker } from '@/components';
import { useUser } from '@/stores';
import { useEffect } from '@/hooks';
import { dayjs } from '@/utils';

const PersonalTab = () => {
  const { user } = useUser();
  const [form] = Form.useForm();

  useEffect(() => {
    if (user) {
      form.setFieldsValue({
        name: user.surename,
        birthDate: dayjs('2024-12-11T17:00:00.000Z'),
        country: 'Indonesiassa',
        phoneNumber: user.phone_number,
      });
    }
  }, [user, form]);

  return (
    <Form form={form} layout="vertical" className="w-full space-y-4">
      <Form.Item label="Name" name="name">
        <Input placeholder="name" />
      </Form.Item>
      <Form.Item label="Birth Date" name="birthDate" className="w-full">
        <DatePicker className="w-full" />
      </Form.Item>
      <Form.Item label="Country" name="country">
        <Select
          placeholder="country"
          defaultValue="Indonesia"
          options={[
            { value: 'indonesia', label: 'Indonesia' },
            { value: 'malaysia', label: 'Malaysia' },
            { value: 'japan', label: 'Japan' },
          ]}
        />
      </Form.Item>
      <Form.Item label="Phone Number" name="phoneNumber">
        <Input placeholder="phoneNumber" />
      </Form.Item>
      <Form.Item className="w-full">
        <Button type="primary" htmlType="submit" disabled className="w-full">
          Save
        </Button>
      </Form.Item>
    </Form>
  );
};

export { PersonalTab };
