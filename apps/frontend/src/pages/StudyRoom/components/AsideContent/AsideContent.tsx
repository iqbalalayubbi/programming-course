import { Iconify } from '@/components';
import { appRoute } from '@/enums';
import { useCourseContent } from '@/stores';
import { Button, Divider, Flex, List } from 'antd';
import { Link, useSearchParams } from 'react-router';

const AsideContent = () => {
  const { courseContents } = useCourseContent();
  const [queryParameters] = useSearchParams();
  const page = queryParameters.get('page');

  return (
    <Flex className="w-full px-5" vertical>
      <h1 className="font-bold text-2xl my-5">Course Content</h1>
      <List
        className="w-full"
        bordered={false}
        dataSource={courseContents}
        renderItem={(item) => (
          <Link
            to={appRoute.STUDY_ROOM_QUERY.replace(
              ':id',
              String(item.course_id),
            ).replace(':page', String(item.page))}
          >
            <List.Item
              className={`${item.page === Number(page) ? 'bg-primary' : ''} group hover:cursor-pointer hover:bg-primary hover:text-light-text`}
            >
              <h3
                className={`${item.page === Number(page) ? 'text-light-text font-semibold group-hover:text-light-text' : ''} font-medium text-xl indent-3 block w-full transition-all duration-300`}
              >
                {item.title}
              </h3>
            </List.Item>
          </Link>
        )}
      />
      <Divider orientation="left" className="my-2" />
      <h1 className="font-bold text-2xl my-5">Note</h1>
      <Flex justify="center" align="center" className="h-60">
        <p className="text-center text-gray-third">Editor JS HERE</p>
      </Flex>
      <Flex gap={60} justify="center" className="my-5 gap-4">
        <Flex gap={24} align="center" vertical className="group">
          <Button
            type="link"
            shape="circle"
            icon={<Iconify icon="grommet-icons:previous" />}
            className="text-6xl group-hover:text-secondary"
          />
          <span className="group-hover:text-secondary font-semibold text-gray-third">
            Prev
          </span>
        </Flex>
        <Flex gap={24} align="center" vertical className="group">
          <Button
            type="link"
            shape="circle"
            icon={<Iconify icon="grommet-icons:next" />}
            className="text-6xl group-hover:text-secondary"
          />
          <span className="group-hover:text-secondary font-semibold text-gray-third">
            Next
          </span>
        </Flex>
      </Flex>
    </Flex>
  );
};

export { AsideContent };
