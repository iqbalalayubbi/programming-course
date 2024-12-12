import { ServiceResponse } from './serviceResponseType';

type DashboardServiceType = {
  getStudentCoursesDetails(username: string): Promise<ServiceResponse>;
};

export { DashboardServiceType };
