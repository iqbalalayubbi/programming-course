import { Skill } from './skill';

type User = {
  id: number;
  username: string;
  password: string;
  email: string;
  age: number | null;
  birthday: Date | null;
  country: string | null;
  image_url: string | null;
  phone_number: string | null;
  total_point: number;
  role: string;
  description: string | null;
  is_verified: boolean;
  createdAt: Date;
  updatedAt: Date;
  skills?: Skill[];
};

export { type User };
