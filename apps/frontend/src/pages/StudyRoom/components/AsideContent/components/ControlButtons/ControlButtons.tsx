import { Iconify, Link, Button, Flex } from '@/components';
import { appRoute } from '@/enums';
import { useCourseContent } from '@/stores';

type Properties = {
  courseId: number;
  page: number;
};

const ControlButtons = ({ courseId, page }: Properties) => {
  const { courseContents } = useCourseContent();

  return (
    <Flex gap={60} justify="center" className="my-5 gap-4">
      <Link
        to={appRoute.STUDY_ROOM_QUERY.replace(':id', String(courseId)).replace(
          ':page',
          String(page - 1 === 0 ? page : page - 1),
        )}
      >
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
      </Link>
      <Flex gap={24} align="center" vertical className="group">
        <Link
          to={appRoute.STUDY_ROOM_QUERY.replace(
            ':id',
            String(courseId),
          ).replace(
            ':page',
            String(
              page + 1 > courseContents.length
                ? courseContents.length
                : page + 1,
            ),
          )}
        >
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
        </Link>
      </Flex>
    </Flex>
  );
};
export { ControlButtons };
