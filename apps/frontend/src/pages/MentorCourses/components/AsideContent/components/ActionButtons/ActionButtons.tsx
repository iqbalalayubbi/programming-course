import { Iconify } from '@/components';
import { FloatButton } from 'antd';
import { SaveOutlined } from '@ant-design/icons';

const ActionButtons = () => {
  return (
    <FloatButton.Group shape="circle" style={{ insetInlineEnd: 24 }}>
      <FloatButton
        icon={<SaveOutlined />}
        onClick={() => console.log('onClick')}
        tooltip="Save Page"
        type="default"
        style={{ insetInlineEnd: 64 }}
      />
      <FloatButton
        icon={<Iconify icon="uil:upload" />}
        onClick={() => console.log('onClick')}
        tooltip="Upload Course"
        type="primary"
        style={{ insetInlineEnd: 16 }}
      />
    </FloatButton.Group>
  );
};

export { ActionButtons };
