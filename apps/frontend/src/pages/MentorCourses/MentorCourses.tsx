import { TwoSectionLayout } from '@/layouts';
import { AsideContent, MainContent } from './components';
import {
  useCourseContentData,
  useEffect,
  useNavigate,
  useSearchParams,
} from '@/hooks';
import { appRoute } from '@/enums';

const MentorCourses = () => {
  const [queryParameters] = useSearchParams();
  const pageNumber = queryParameters.get('page');
  const courseId = queryParameters.get('course');
  const navigate = useNavigate();

  useCourseContentData(Number(courseId), Number(pageNumber));

  useEffect(() => {
    if (!pageNumber && !courseId) {
      navigate(appRoute.MENTOR_MANAGEMENT);
    }
  }, [pageNumber, courseId, navigate]);

  return (
    <TwoSectionLayout
      mainContent={<MainContent />}
      asideContent={<AsideContent />}
    />
  );
};

export { MentorCourses };
