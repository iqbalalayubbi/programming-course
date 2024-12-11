import { User } from './user';

type Skill = {
  id: number;
  name: string;
  star_total: number;
  createdAt: Date;
  updatedAt: Date;
  users?: User[];
};

export { type Skill };
