import { DashboardServiceType } from '@/services';
import { formatResponse } from '@/utils';
import { statusCode } from 'common';
import { Request, Response } from 'express';

type Constructor = {
  dashboardService: DashboardServiceType;
};

class DashboarController {
  private dashboardService: DashboardServiceType;

  public constructor({ dashboardService }: Constructor) {
    this.dashboardService = dashboardService;

    this.getStudentCoursesDetails = this.getStudentCoursesDetails.bind(this);
  }

  async getStudentCoursesDetails(req: Request, res: Response) {
    const { username } = req.params;

    const { isSuccess, data, error } =
      await this.dashboardService.getStudentCoursesDetails(username);

    if (isSuccess && data) {
      return formatResponse({
        res,
        statusCode: statusCode.OK,
        message: 'Student courses retrieved successfully',
        data,
      });
    }
    if (error) {
      return formatResponse({
        res,
        statusCode: statusCode.INTERNAL_SERVER_ERROR,
        message: 'Failed to retrieve student courses',
        errors: [{ field: error?.field, message: error?.message }],
      });
    }

    return formatResponse({
      res,
      statusCode: statusCode.NOT_FOUND,
      message: 'Student not found',
    });
  }
}

export { DashboarController };
