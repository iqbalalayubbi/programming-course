type CreateCoursePayload = {
  id: number;
  mentor_username: string;
  title: string;
  description: string;
  star_total: number;
  is_certificate_exist: boolean;
  thumbnail_url: string;
};

export { type CreateCoursePayload };
