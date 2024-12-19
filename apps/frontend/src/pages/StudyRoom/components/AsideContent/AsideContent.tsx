import { appRoute } from '@/enums';
import { useCourseContent } from '@/stores';
import { Divider, Flex, List, Link } from '@/components';
import { useSearchParams } from 'react-router';
import { ControlButtons } from './components';

const AsideContent = () => {
  const { courseContents, courseContent } = useCourseContent();
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
      <ControlButtons
        page={courseContent.page}
        courseId={courseContent.course_id}
      />
    </Flex>
  );
};

export { AsideContent };
